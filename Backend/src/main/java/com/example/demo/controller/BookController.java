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
        Path path = Paths.get(booksDataPath);
        List<String> lines = Files.readAllLines(path);
        System.out.println("Reading booksData.js from: " + booksDataPath);

        String newEntry = String.format(
                "    {\n" +
                        "        title: \"%s\",\n" +
                        "        author: \"%s\",\n" +
                        "        description: \"%s\",\n" +
                        "        cover: \"%s\",\n" +
                        "        file: \"%s\",\n" +
                        "        genres: [%s]\n" +
                        "    }",
                book.getTitle(),
                book.getAuthor(),
                book.getDescription(),
                book.getCover(),
                book.getFile(),
                Arrays.stream(book.getGenres().split(","))
                        .map(g -> "\"" + g.trim() + "\"")
                        .reduce((a, b) -> a + ", " + b).orElse("")
        );

        // Find the index of the line that contains just the closing "]" of the array
        int insertIndex = -1;
        for (int i = lines.size() - 1; i >= 0; i--) {
            String trimmed = lines.get(i).trim();
            if (trimmed.equals("]") || trimmed.equals("];")) {
                insertIndex = i;
                break;
            }
        }

        if (insertIndex == -1) {
            System.err.println("Couldn't locate Books array in the JS file.");
            throw new IOException("Couldn't locate Books array in the JS file.");
        }

        // Check if the last book ends with a comma; if not, add one
        int lastBookIndex = insertIndex - 1;
        while (lastBookIndex > 0 && lines.get(lastBookIndex).trim().isEmpty()) {
            lastBookIndex--;
        }
        String lastLine = lines.get(lastBookIndex);
        if (!lastLine.trim().endsWith(",")) {
            lines.set(lastBookIndex, lastLine + ",");
        }

        // Insert the new book before the closing ]
        lines.add(insertIndex, newEntry);

        // Write everything back
        Files.write(path, lines);
        System.out.println("Successfully updated booksData.js");
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
