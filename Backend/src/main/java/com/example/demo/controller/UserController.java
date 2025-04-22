package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.dto.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
        System.out.println("🔥 UserController initialized!");
    }

    @GetMapping
    public List<User> getUsers() {
        System.out.println("📥 GET /api/users hit!");
        return repo.findAll();
    }

    @GetMapping("/ping")
    public String ping() {
        return "Hello from backend!";
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        // Check if the email already exists
        if (repo.existsByEmail(user.getEmail())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("message", "This email has been registered"));
        }

        // Check if the username already exists
        if (repo.existsByName(user.getName())) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(Collections.singletonMap("message", "This username has been taken"));
        }

        // Save the user if both email and username are available
        return ResponseEntity.ok(repo.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        String identifier = loginRequest.getEmailOrUsername();
        String password = loginRequest.getPassword();

        // Attempt to find user by email first
        User existingUser = repo.findByEmail(identifier);
        if (existingUser == null) {
            // If no user found by email, try by username
            existingUser = repo.findByName(identifier);
        }

        if (existingUser != null && existingUser.getPassword().equals(password)) {
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Collections.singletonMap("message", "Invalid credentials"));
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return repo.findById(id)
                .map(user -> {
                    // Update user fields if they are not null
                    if (updatedUser.getName() != null) user.setName(updatedUser.getName());
                    if (updatedUser.getEmail() != null) user.setEmail(updatedUser.getEmail());
                    if (updatedUser.getPassword() != null) user.setPassword(updatedUser.getPassword());
                    if (updatedUser.getPhoto() != null) {
                        user.setPhoto(updatedUser.getPhoto());
                        System.out.println("📷 Updating photo for user ID: " + id);
                    }
                    if (updatedUser.getCoins() != null) user.setCoins(updatedUser.getCoins());

                    // Save the updated user
                    User savedUser = repo.save(user);
                    System.out.println("✅ Saved user: " + savedUser.getId() + ", name=" + savedUser.getName());
                    return ResponseEntity.ok(savedUser);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
