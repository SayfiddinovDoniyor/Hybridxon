-- Create users table
CREATE TABLE IF NOT EXISTS users (
                                     id SERIAL PRIMARY KEY,
                                     name VARCHAR(100),
                                     email VARCHAR(100) UNIQUE,
                                     password VARCHAR(255),
                                     photo VARCHAR(255),
                                     coins INT
);

-- Create books table with genres as TEXT array
CREATE TABLE IF NOT EXISTS books (
                       id SERIAL PRIMARY KEY,
                       title VARCHAR(255),
                       author VARCHAR(255),
                       description TEXT,
                       cover VARCHAR(255),
                       file VARCHAR(255),
                       genres TEXT
);


-- Insert data into users table
INSERT INTO users (name, email, password, photo, coins) VALUES
                                                            ('Alice', 'alice@example.com', 'password123', 'alice.jpg', 50),
                                                            ('Bob', 'bob@example.com', 'password456', 'bob.png', 30),
                                                            ('Charlie', 'charlie@example.com', 'charliepass', 'charlie.png', 100);

-- Insert data into books table with ARRAY syntax for genres
INSERT INTO books (title, author, description, cover, file, genres) VALUES
                                                                        ('Effective Java', 'Joshua Bloch', 'A comprehensive guide to best practices in Java.', 'effective_java.jpg', 'books/effective_java.pdf', ARRAY['Java', 'Programming']),
                                                                        ('Clean Code', 'Robert C. Martin', 'A handbook of Agile software craftsmanship.', 'clean_code.jpg', 'books/clean_code.pdf', ARRAY['Software Engineering', 'Best Practices']),
                                                                        ('Design Patterns', 'Erich Gamma et al.', 'Elements of reusable object-oriented software.', 'design_patterns.jpg', 'books/design_patterns.pdf', ARRAY['Architecture', 'OOP']);
