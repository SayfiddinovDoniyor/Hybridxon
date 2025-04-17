import React, { useState } from "react";

const Sell = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    price: "",
    description: "",
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setBookDetails({ ...bookDetails, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRequest = {
      id: Date.now(),
      ...bookDetails,
      image: preview,
    };

    const existing = JSON.parse(localStorage.getItem("sellRequests")) || [];
    existing.push(newRequest);
    localStorage.setItem("sellRequests", JSON.stringify(existing));

    alert("Book listed for sale!");

    setBookDetails({ title: "", author: "", price: "", description: "" });
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div
        className="p-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #92A8D1, #F7CAC9)",
          borderRadius: "25px",
          color: "#fff",
          fontFamily: "Snell Roundhand, cursive",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            fontWeight: "bold",
            textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          Sell Your Book 📚
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Book Title"
            value={bookDetails.title}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={bookDetails.author}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={bookDetails.price}
            onChange={handleChange}
            className="form-control mb-3"
            required
          />
          <textarea
            name="description"
            placeholder="Book Description"
            value={bookDetails.description}
            onChange={handleChange}
            className="form-control mb-3"
            rows="3"
            required
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control mb-3"
            required
          />

          {preview && (
            <div className="text-center mb-3">
              <img
                src={preview}
                alt="Preview"
                style={{
                  maxWidth: "200px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                }}
              />
            </div>
          )}

          <button
            type="submit"
            className="btn btn-lg btn-light w-100"
            style={{
              fontFamily: "Snell Roundhand, cursive",
              fontWeight: "bold",
              backgroundColor: "#CD295A",
              color: "#fff",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              border: "none",
              borderRadius: "15px",
            }}
          >
            List Book for Sale
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;