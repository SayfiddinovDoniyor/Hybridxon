package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "\"users\"")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String email;
    private String password;
    private String photo;
    private Integer coins;

    public Long getId() { return this.id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return this.name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return this.email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return this.password; }
    public void setPassword(String password) { this.password = password; }

    public String getPhoto() { return this.photo; }
    public void setPhoto(String photo) { this.photo = photo; }

    public Integer getCoins() { return this.coins; }
    public void setCoins(Integer coins) { this.coins = coins; }
}
