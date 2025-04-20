package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.Arrays;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadBook(
            @RequestParam("pdf") MultipartFile pdfFile,
            @RequestParam String title,
            @RequestParam String author,
            @RequestParam String description,
            @RequestParam String cover,
            @RequestParam String genres) {

        System.out.println("Incoming book upload:");
        System.out.println("Title: " + title);
        System.out.println("Author: " + author);
        System.out.println("PDF file: " + pdfFile.getOriginalFilename());

        try {
            Path pdfPath = Paths.get("src/main/resources/books/" + pdfFile.getOriginalFilename());
            Files.write(pdfPath, pdfFile.getBytes());
            System.out.println("PDF saved to: " + pdfPath);

            Book newBook = new Book();
            newBook.setTitle(title);
            newBook.setAuthor(author);
            newBook.setDescription(description);
            newBook.setCover(cover);
            newBook.setFile(pdfFile.getOriginalFilename());
            newBook.setGenres(genres.split(","));

            bookRepository.save(newBook);

            return ResponseEntity.ok("Book uploaded and saved to database!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }
}
