import React from "react";
import { useParams } from "react-router-dom";
import Books from "../components/booksData.js";

const ReadPage = () => {
  const { title } = useParams();
  const book = Books.find((b) => b.title === title);

  if (!book) {
    return <p style={{ textAlign: "center", color: "red", fontSize: "1.5rem" }}>Book not found!</p>;
  }

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ color: "#6a11cb", fontSize: "2rem" }}>{book.title}</h2>
      <embed
        src={book.file}
        type="application/pdf"
        width="80%"
        height="600px"
        style={{ border: "1px solid #ddd", borderRadius: "10px" }}
      />
    </div>
  );
};

export default ReadPage;
