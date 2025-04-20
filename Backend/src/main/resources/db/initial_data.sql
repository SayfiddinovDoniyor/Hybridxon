INSERT INTO users (name, email, password, photo, coins) VALUES
('Alice', 'alice@example.com', 'password123', 'alice.jpg', 50),
('Bob', 'bob@example.com', 'password456', 'bob.png', 30),
('Charlie', 'charlie@example.com', 'charliepass', 'charlie.png', 100);

INSERT INTO books (title, author, description, cover, file, genres) VALUES
('Effective Java', 'Joshua Bloch', 'A comprehensive guide to best practices in Java.', 'effective_java.jpg', 'books/effective_java.pdf', ARRAY['Java', 'Programming']),
('Clean Code', 'Robert C. Martin', 'A handbook of Agile software craftsmanship.', 'clean_code.jpg', 'books/clean_code.pdf', ARRAY['Software Engineering', 'Best Practices']),
('Design Patterns', 'Erich Gamma et al.', 'Elements of reusable object-oriented software.', 'design_patterns.jpg', 'books/design_patterns.pdf', ARRAY['Architecture', 'OOP']);
