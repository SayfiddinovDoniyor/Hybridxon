import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Books from "../components/booksData.js";

const SectionsPage = () => {
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const navigate = useNavigate();

  const getAllBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    return [...Books, ...storedBooks];
  };

  useEffect(() => {
    const allBooks = getAllBooks();
    const genresSet = new Set();
    allBooks.forEach((book) => book.genres.forEach((genre) => genresSet.add(genre)));
    setGenres(Array.from(genresSet));
  }, []);

  const handleSearchChange = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredBooks([]);
      return;
    }

    const allBooks = getAllBooks();
    const filtered = allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
    );

    setFilteredBooks(filtered);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <input
        id="search"
        type="text"
        placeholder="Search...🔍"
        value={searchTerm}
        onChange={handleSearchChange}
        style={{
          width: "60%",
          padding: "10px",
          marginBottom: "20px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {searchTerm.trim() === "" && (
        <div>
          {genres.map((genre) => (
            <button
              key={genre}
              className="section-btn"
              onClick={() => navigate(`/sections/${genre}`)}
              style={{
                fontWeight: "bold",
                fontStyle: "italic",
                fontFamily: "URW Chancery L, cursive",
                margin: "5px",
                padding: "10px 15px",
                borderRadius: "5px",
                backgroundColor: "#6a11cb",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              {genre}
            </button>
          ))}
        </div>
      )}

      {searchTerm.trim() !== "" && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  width: "250px",
                  textAlign: "center",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#f9f9f9",
                }}
              >
                <img
                  src={book.cover}
                  alt={book.title}
                  style={{ width: "100%", borderRadius: "5px" }}
                />
                <h3>{book.title}</h3>
                <p><strong>Author:</strong> {book.author}</p>
                <p>{book.description}</p>
                <a
                  href={`/${book.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-block",
                    marginTop: "10px",
                    padding: "10px 15px",
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    color: "white",
                    textDecoration: "none",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                    transition: "transform 0.2s ease",
                  }}
                  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                  onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                >
                  📖 Read Now
                </a>
              </div>
            ))
          ) : (
            <p style={{ color: "red", fontSize: "1.2rem", marginTop: "20px" }}>
              No books found matching your search.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionsPage;
