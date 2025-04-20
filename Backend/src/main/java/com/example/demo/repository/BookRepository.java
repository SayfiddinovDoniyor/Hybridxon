package com.example.demo.repository;

import com.example.demo.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {
    List<Book> findByAuthor(String author);

    @Query(value = "SELECT * FROM books WHERE :genre = ANY(genres)", nativeQuery = true)
    List<Book> findByGenre(@Param("genre") String genre);
}