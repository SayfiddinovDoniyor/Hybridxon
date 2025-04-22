import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [opacity, setOpacity] = useState(0.75);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = { name, email, password };
  
    try {
      const response = await fetch("http://localhost:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/");
      } else {
        const errorData = await response.json();
        const message = errorData.message || "";
  
        if (message.includes("username")) {
          setError("this username has taken");
        } else if (message.includes("email")) {
          setError("this email has been registered");
        } else {
          setError("Failed to register. Try again.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Something went wrong.");
    }
  };
  

  return (
    <div
      className="container mt-5"
      style={{
        background: "linear-gradient(135deg, #D8B5FF, #3BADAE)",
        borderRadius: "20px",
        transition: "opacity 0.3s ease-in-out",
        padding: "2.5rem",
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
        opacity: opacity,
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0.75)}
    >
      <h2
        className="text-center mb-4"
        style={{
          color: "#B80F57",
          fontWeight: "bold",
          fontStyle: "italic",
          fontFamily: "URW Chancery L, cursive",
        }}
      >
        Sign Up <span style={{ fontStyle: "normal" }}>📝✨</span>
      </h2>

      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            className="form-label"
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "URW Chancery L, cursive",
              color: "#FFFFFF",
            }}
          >
            Name:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label
            className="form-label"
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "URW Chancery L, cursive",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label
            className="form-label"
            style={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontStyle: "italic",
              fontFamily: "URW Chancery L, cursive",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Create a Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && (
          <div className="alert alert-danger">
            <strong>Error: </strong>{error}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-success w-100 mt-3"
          style={{
            backgroundColor: "#CD295A",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "URW Chancery L, cursive",
          }}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUp;
