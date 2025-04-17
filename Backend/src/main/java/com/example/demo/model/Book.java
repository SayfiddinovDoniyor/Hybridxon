package com.example.demo.model;


public class Book {
    private String title;
    private String author;
    private String description;
    private String cover;
    private String file;
    private String[] genres;

    public String getTitle(){
        return this.title;
    }
    public String getAuthor(){
        return this.author;
    }
    public String getDescription(){
        return this.description;
    }
    public String getCover(){
        return this.cover;
    }
    public String getFile(){
        return this.file;
    }
    public String[] getGenres(){
        return this.genres;
    }
    public void setTitle(String title){
        this.title = title;
    }
    public void setAuthor(String author){
        this.author = author;
    }
    public void setDescription(String description){
        this.description = description;
    }
    public void setCover(String cover){
        this.cover = cover;
    }
    public void setFile(String file){
        this.file = file;
    }
    public void setGenres(String[] genres){
        this.genres = genres;
    }
}