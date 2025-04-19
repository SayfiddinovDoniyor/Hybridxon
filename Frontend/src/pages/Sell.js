import React, { useState } from "react";
import { FaSearch, FaShippingFast, FaPiggyBank } from "react-icons/fa";

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
    <div className="container mt-5 mb-5">

      {/* Section: Selling Books is Easy */}
      <div
        className="p-4"
        style={{
          backgroundColor: "#e3f2fd",
          borderRadius: "20px",
          boxShadow: "0 6px 12px rgba(0, 0, 0, 0.15)",
          maxWidth: "900px",
          margin: "0 auto 40px auto",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h3
          style={{
            fontWeight: "600",
            color: "#333",
            marginBottom: "25px",
          }}
        >
          Selling books for cash is easy!
        </h3>

        <div
          className="row"
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            color: "#555",
          }}
        >
          <div className="col-md-3 text-center mb-4">
            <FaSearch size={50} color="#2196f3" />
            <h5 className="mt-2">1. Find your books</h5>
            <p style={{ fontSize: "14px" }}>Search above to get a quote.</p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <FaShippingFast size={50} color="#f57c00" />
            <h5 className="mt-2">2. Ship them for free</h5>
            <p style={{ fontSize: "14px" }}>
              Print a prepaid shipping label.
            </p>
          </div>
          <div className="col-md-3 text-center mb-4">
            <FaPiggyBank size={50} color="#4caf50" />
            <h5 className="mt-2">3. Get your cash!</h5>
            <p style={{ fontSize: "14px" }}>
              Get paid by check or PayPal.
            </p>
          </div>
        </div>
      </div>

      {/* Sell Form */}
      <div
        className="p-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #92A8D1, #F7CAC9)",
          borderRadius: "25px",
          color: "#fff",
          fontFamily: "Snell Roundhand, cursive",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
          maxWidth: "600px",
          margin: "0 auto",
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
