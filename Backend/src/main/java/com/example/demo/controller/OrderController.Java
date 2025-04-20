package com.example.demo.controller;

import com.example.demo.model.Book;
import com.example.demo.model.Order;
import com.example.demo.model.User;
import com.example.demo.repository.BookRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    private final OrderRepository orderRepo;
    private final UserRepository userRepo;
    private final BookRepository bookRepo;

    public OrderController(OrderRepository orderRepo, UserRepository userRepo, BookRepository bookRepo) {
        this.orderRepo = orderRepo;
        this.userRepo = userRepo;
        this.bookRepo = bookRepo;
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestParam Long userId, @RequestParam Long bookId) {
        User user = userRepo.findById(userId).orElse(null);
        Book book = bookRepo.findById(bookId).orElse(null);

        if (user == null || book == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        Order order = new Order();
        order.setUser(user);
        order.setBook(book);
        order.setOrderedAt(new java.sql.Timestamp(System.currentTimeMillis()));

        Order savedOrder = orderRepo.save(order);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedOrder);
    }

    @GetMapping()
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepo.findAll();
        if (orders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(orders);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUser(@PathVariable Long userId) {
        List<Order> orders = orderRepo.findByUserId(userId);
        if (orders.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(orders);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
