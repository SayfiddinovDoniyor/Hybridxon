import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Books from "../components/booksData.js";

const SectionPage = () => {
  const { genre } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const combinedBooks = [...Books, ...storedBooks];
    setBooks(combinedBooks.filter((book) => book.genres.includes(genre)));
  }, [genre]);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "#6a11cb", fontSize: "2rem" }}>{genre} Books 📚</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {books.length > 0 ? (
          books.map((book, index) => (
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
              <img src={book.cover} alt={book.title} style={{ width: "100%", borderRadius: "5px" }} />
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p>{book.description}</p>
              <a
                  href={book.pdfUrl ? book.pdfUrl : `/${book.file}`} 
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
          <p>No books available in this genre.</p>
        )}
      </div>
    </div>
  );
};

export default SectionPage;
