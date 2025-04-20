package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import com.example.demo.dto.LoginRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    private final UserRepository repo;

    public UserController(UserRepository repo) {
        this.repo = repo;
    }

    @PostMapping
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (repo.findByEmail(user.getEmail()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email already registered");
        }
        if (repo.findByName(user.getName()) != null) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Username already taken");
        }
        return ResponseEntity.ok(repo.save(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        String identifier = loginRequest.getEmailOrUsername();
        String password = loginRequest.getPassword();

        User existingUser = repo.findByEmail(identifier);
        if (existingUser == null) {
            existingUser = repo.findByName(identifier);
        }

        if (existingUser != null && password.equals(existingUser.getPassword())) {
            return ResponseEntity.ok(existingUser);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User updatedUser) {
        return repo.findById(id)
                .map(user -> {
                    if (updatedUser.getName() != null) user.setName(updatedUser.getName());
                    if (updatedUser.getEmail() != null) user.setEmail(updatedUser.getEmail());
                    if (updatedUser.getPassword() != null) user.setPassword(updatedUser.getPassword());
                    if (updatedUser.getPhoto() != null) user.setPhoto(updatedUser.getPhoto());
                    if (updatedUser.getCoins() != null) user.setCoins(updatedUser.getCoins());

                    User savedUser = repo.save(user);
                    return ResponseEntity.ok(savedUser);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}