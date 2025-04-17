import React from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [opacity, setOpacity] = React.useState(0.75);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { emailOrUsername, password };

    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
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
        alert("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      className="container mt-5"
      style={{
        height: "25rem",
        background: "linear-gradient(45deg, #D8B5FF, #3BADAE, #D8B5FF)",
        borderRadius: "20px",
        opacity: opacity,
        transition: "opacity 0.3s ease-in-out",
        padding: "2rem",
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
        Sign In <span style={{ fontStyle: "normal" }}>🔑👤</span>
      </h2>
      <form className="w-50 mx-auto" onSubmit={handleSubmit}>
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
            Email or Username:
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Email or Username"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
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
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="btn btn-success w-100"
          style={{
            backgroundColor: "#CD295A",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "URW Chancery L, cursive",
          }}
        >
          Sign In
        </button>
      </form>

      <div className="container mt-4">
        <label
          className="text-center"
          style={{
            color: "#FFFFFF",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "URW Chancery L, cursive",
          }}
        >
          New to the website?
        </label>

        <button
          type="button"
          className="btn btn-success w-100"
          style={{
            backgroundColor: "#CD295A",
            fontWeight: "bold",
            fontStyle: "italic",
            fontFamily: "URW Chancery L, cursive",
          }}
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignIn;