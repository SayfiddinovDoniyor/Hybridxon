package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.*;
import java.nio.file.*;
import java.util.*;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @Value("${upload.path}")
    private String uploadDir;

    @Value("${booksdata.path}")
    private String booksDataPath;

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    // Endpoint to upload a new book
    @PostMapping("/upload")
    public ResponseEntity<Book> uploadBook(
            @RequestParam String title,
            @RequestParam String author,
            @RequestParam String description,
            @RequestParam String cover,
            @RequestParam String genres,
            @RequestParam("pdf") MultipartFile pdfFile
    ) {
        try {
            // Create filename
            String safeTitle = title.toLowerCase().replaceAll("[^a-z0-9]+", "-");
            String fileName = safeTitle + ".pdf";
            Path filePath = Paths.get(uploadDir, fileName);

            // Save file
            Files.copy(pdfFile.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);

            // Save to DB
            Book book = new Book();
            book.setTitle(title);
            book.setAuthor(author);
            book.setDescription(description);
            book.setCover(cover);
            book.setGenres(genres);
            book.setFile("books/" + fileName);
            Book savedBook = bookRepository.save(book);

            // Update JS file
            updateBooksDataFile(savedBook);

            return ResponseEntity.ok(savedBook);
        } catch (IOException e) {
            return ResponseEntity.status(500).body(null);
        }
    }

    // Method to update the booksData.js file
    private void updateBooksDataFile(Book book) throws IOException {
        // Path to the booksData.js file
        Path path = Paths.get(booksDataPath);

        // Read the contents of the file
        List<String> lines = Files.readAllLines(path);

        // Log the file path and read contents for debugging
        System.out.println("Reading booksData.js from: " + booksDataPath);
        System.out.println("Current contents of booksData.js:");
        lines.forEach(System.out::println);

        // Prepare the new book entry in the format required by your booksData.js file
        String newEntry = String.format(
                "            {\n" +
                        "                title: \"%s\",\n" +
                        "                author: \"%s\",\n" +
                        "                description: \"%s\",\n" +
                        "                cover: \"%s\",\n" +
                        "                file: \"%s\",\n" +
                        "                genres: [%s]\n" +
                        "            }",
                book.getTitle(),
                book.getAuthor(),
                book.getDescription(),
                book.getCover(),
                book.getFile(),
                Arrays.stream(book.getGenres().split(","))
                        .map(g -> "\"" + g.trim() + "\"")
                        .reduce((a, b) -> a + ", " + b).orElse("")
        );

        // Locate where the Books array is declared in the JS file
        int arrayStartIndex = -1;
        int arrayEndIndex = -1;

        // Find the start and end indices of the array
        for (int i = 0; i < lines.size(); i++) {
            if (lines.get(i).contains("const Books = [")) {
                arrayStartIndex = i;
            } else if (lines.get(i).contains("]")) {
                arrayEndIndex = i;
                break;
            }
        }

        if (arrayStartIndex != -1 && arrayEndIndex != -1) {
            // Remove the last closing bracket of the array
            lines.remove(arrayEndIndex);

            // Add the new book to the end of the array
            lines.add(arrayEndIndex, "            " + newEntry + ",");

            // Add the closing bracket back
            lines.add(arrayEndIndex + 1, "        ];");

            // Write the updated lines back to the file
            Files.write(path, lines);
            System.out.println("Successfully updated booksData.js");
        } else {
            System.err.println("Couldn't locate Books array in the JS file.");
            throw new IOException("Couldn't locate Books array in the JS file.");
        }
    }

    // Endpoint to get all books
    @GetMapping("/")
    public ResponseEntity<List<Book>> getAllBooks() {
        try {
            List<Book> books = bookRepository.findAll();
            return ResponseEntity.ok(books);
        } catch (Exception e) {
            return ResponseEntity.status(500).body(null);
        }
    }
}
