import { useState, useEffect } from "react";
import Books from "../components/booksData.js";

const Market = () => {

    const [filteredBooks, setFilteredBooks] = useState([]);
    const getAllBooks = () => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        return [...Books, ...storedBooks];
    };


    const shuffleArray = (arr) => {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };
    useEffect(() => {
        const allBooks = getAllBooks();
        const randomTen = shuffleArray(allBooks).slice(0, 10);
        setFilteredBooks(randomTen);
      }, []);

    return (
            <div
                className="mt-5 p-4 mb-5"
                style={{
                backgroundColor: "#e3f2fd",
                borderRadius: "20px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
                maxWidth: "1000px",
                margin: "0 auto",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
                }}
            >
                <h1>Market place</h1>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: 16,
                        padding: 16,
                    }}
                >
                {filteredBooks.map((book, index) => (
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
                    href={`#`}
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
                    From: {book.price}
                    </a>
                </div>
                ))}
                </div>
                

            </div>
    );
};

export default Market;
