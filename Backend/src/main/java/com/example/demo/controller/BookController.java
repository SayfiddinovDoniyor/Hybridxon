package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.repository.BookRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/books")
public class BookController {

    private final BookRepository bookRepository;
    private final Path bookStoragePath = Paths.get("src/main/resources/books");

    public BookController(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        try {
            Files.createDirectories(bookStoragePath);
        } catch (IOException e) {
            throw new RuntimeException("Failed to create book storage directory", e);
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<String> uploadBook(
            @RequestParam("pdf") MultipartFile pdfFile,
            @RequestParam String title,
            @RequestParam String author,
            @RequestParam String description,
            @RequestParam String cover,
            @RequestParam String genres) {

        try {
            Path pdfPath = bookStoragePath.resolve(pdfFile.getOriginalFilename());
            Files.write(pdfPath, pdfFile.getBytes());

            Book newBook = new Book();
            newBook.setTitle(title);
            newBook.setAuthor(author);
            newBook.setDescription(description);
            newBook.setCover(cover);
            newBook.setFile(pdfFile.getOriginalFilename());
            newBook.setGenres(genres.split(","));

            bookRepository.save(newBook);
            return ResponseEntity.ok("Book uploaded and saved!");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }

    @GetMapping
    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable Long id) {
        return bookRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateBook(
            @PathVariable Long id,
            @RequestBody Book updatedBook) {

        Optional<Book> existingBookOpt = bookRepository.findById(id);
        if (existingBookOpt.isEmpty()) {
            return ResponseEntity.notFound().build();
        }

        Book existingBook = existingBookOpt.get();
        existingBook.setTitle(updatedBook.getTitle());
        existingBook.setAuthor(updatedBook.getAuthor());
        existingBook.setDescription(updatedBook.getDescription());
        existingBook.setCover(updatedBook.getCover());
        existingBook.setFile(updatedBook.getFile());
        existingBook.setGenres(updatedBook.getGenres());

        bookRepository.save(existingBook);
        return ResponseEntity.ok("Book updated successfully");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        if (!bookRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        bookRepository.deleteById(id);
        return ResponseEntity.ok("Book deleted");
    }

    @GetMapping("/author/{author}")
    public List<Book> getBooksByAuthor(@PathVariable String author) {
        return bookRepository.findByAuthor(author);
    }

    @GetMapping("/genre/{genre}")
    public List<Book> getBooksByGenre(@PathVariable String genre) {
        return bookRepository.findByGenre(genre);
    }
}
