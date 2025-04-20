package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.WishingList;
import com.example.demo.repository.UserRepository;
import com.example.demo.repository.WishingListRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/wishlist")
@CrossOrigin(origins = "http://localhost:3000")
public class WishingListController {

    private final WishingListRepository wishRepo;
    private final UserRepository userRepo;

    public WishingListController(WishingListRepository wishRepo, UserRepository userRepo) {
        this.wishRepo = wishRepo;
        this.userRepo = userRepo;
    }

    @PostMapping
    public ResponseEntity<WishingList> addWish(@RequestParam Long userId, @RequestParam String title, @RequestParam String author) {
        User user = userRepo.findById(userId).orElse(null);

        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        WishingList wish = new WishingList();
        wish.setUser(user);
        wish.setTitle(title);
        wish.setAuthor(author);

        WishingList savedWish = wishRepo.save(wish);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedWish);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<WishingList>> getWishesByUser(@PathVariable Long userId) {
        List<WishingList> wishes = wishRepo.findByUserId(userId);
        if (wishes.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(wishes);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteWish(@PathVariable Long id) {
        wishRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
