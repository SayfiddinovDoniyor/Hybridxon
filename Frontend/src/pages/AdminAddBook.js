import React, { useState } from "react";

const AdminAddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    description: "",
    cover: "",
    pdfFile: null,
    genres: "",
  });

  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBook({ ...book, pdfFile: file });
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!book.cover || !book.pdfFile) {
      alert("Please provide both a cover image URL and a PDF file.");
      return;
    }

    const formData = new FormData();
    formData.append("title", book.title);
    formData.append("author", book.author);
    formData.append("description", book.description);
    formData.append("cover", book.cover);
    formData.append("genres", book.genres);
    formData.append("pdf", book.pdfFile);

    try {
      const response = await fetch("http://localhost:8080/api/books/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Book successfully uploaded!");
        setBook({
          title: "",
          author: "",
          description: "",
          cover: "",
          pdfFile: null,
          genres: "",
        });
        setFileName("");
      } else {
        alert("Failed to upload the book.");
      }
    } catch (error) {
      console.error("Error uploading book:", error);
      alert("An error occurred during upload.");
    }
  };

  const inputStyle = {
    width: "100%",
    maxWidth: "400px",
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1rem",
    backgroundColor: "#CD295A",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const fileInputLabelStyle = {
    display: "inline-block",
    padding: "10px 20px",
    backgroundColor: "#34495e",
    color: "#ecf0f1",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "10px",
    fontWeight: "bold",
  };

  const fileInputStyle = {
    display: "none",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#2c3e50",
          borderRadius: "10px",
          padding: "30px",
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Add New Book</h2>
        <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={book.title}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={book.author}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="description"
            placeholder="Book Description"
            value={book.description}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: "100px" }}
          />
          <input
            type="text"
            name="genres"
            placeholder="Genres (comma separated)"
            value={book.genres}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <input
            type="text"
            name="cover"
            placeholder="Cover Image URL"
            value={book.cover}
            onChange={handleChange}
            required
            style={inputStyle}
          />

          <label style={fileInputLabelStyle}>
            Upload PDF File
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              style={fileInputStyle}
              required
            />
          </label>
          {fileName && (
            <p style={{ marginTop: "5px", fontStyle: "italic", fontSize: "0.9rem" }}>
              Selected: {fileName}
            </p>
          )}

          <button type="submit" style={buttonStyle}>
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminAddBook;