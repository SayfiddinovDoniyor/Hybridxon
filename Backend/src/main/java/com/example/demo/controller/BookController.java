package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.*;
import java.util.*;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @PostMapping("/api/books/upload")
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
            Path pdfPath = Paths.get("../Frontend/public/books/" + pdfFile.getOriginalFilename());
            Files.write(pdfPath, pdfFile.getBytes());
            System.out.println("PDF saved to: " + pdfPath);

            Path dataPath = Paths.get("../Frontend/src/components/booksData.js");
            List<String> lines = Files.readAllLines(dataPath);

            int insertIndex = lines.lastIndexOf("]") - 1;
            String newBookEntry = String.format(
                    "    {\n" +
                            "        title: \"%s\",\n" +
                            "        author: \"%s\",\n" +
                            "        description: \"%s\",\n" +
                            "        cover: \"%s\",\n" +
                            "        file: \"books/%s\",\n" +
                            "        genres: [%s]\n" +
                            "    },",
                    title, author, description, cover,
                    pdfFile.getOriginalFilename(),
                    Arrays.stream(genres.split(",")).map(g -> "\"" + g.trim() + "\"").collect(Collectors.joining(", "))
            );

            lines.add(insertIndex, newBookEntry);
            Files.write(dataPath, lines);
            System.out.println("Book entry added to booksData.js");

            return ResponseEntity.ok("Book uploaded!");
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Upload failed: " + e.getMessage());
        }
    }
}