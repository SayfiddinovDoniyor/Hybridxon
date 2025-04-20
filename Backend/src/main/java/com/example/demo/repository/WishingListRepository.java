package com.example.demo.repository;

import com.example.demo.model.WishingList;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface WishingListRepository extends JpaRepository<WishingList, Long> {
    List<WishingList> findByUserId(Long userId);
}
