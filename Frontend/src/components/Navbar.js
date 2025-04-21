import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "admin11012005") {
      navigate("/admin");
    } else if (password) {
      alert("Incorrect password!");
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(45deg, #38ADAE, #CD295A)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontSize: "2rem",
            fontFamily: "Snell Roundhand, cursive",
            fontWeight: "bold",
            fontStyle: "italic",
            textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          BookLand
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={linkStyle}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/market" style={linkStyle}>
                Market
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" style={linkStyle}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sell" style={linkStyle}>
                Sell Your Book
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-warning ms-2"
                style={adminButtonStyle}
                onClick={handleAdminAccess}
              >
                Admin Only
              </button>
            </li>

            {user && (
              <li className="nav-item ms-auto d-flex align-items-center">
                <span
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontFamily: "Snell Roundhand, cursive",
                    fontStyle: "italic",
                    marginRight: "10px",
                    fontSize: "1.1rem",
                    textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
                  }}
                >
                  Hi Reader!
                </span>
              </li>
            )}

            {!user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signIn" style={linkStyle}>
                    Sign In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" style={linkStyle}>
                    Sign Up
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-sm btn-outline-light ms-2"
                  style={{
                    fontFamily: "Snell Roundhand, cursive",
                    fontStyle: "italic",
                    fontWeight: "bold",
                    backgroundColor: "#CD295A",
                    border: "none",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

const linkStyle = {
  backgroundColor: "#6FD6FF",
  fontWeight: "bold",
  fontStyle: "italic",
  fontFamily: "Snell Roundhand, cursive",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  borderRadius: "8px",
  marginLeft: "8px",
  padding: "6px 12px",
};

const adminButtonStyle = {
  fontFamily: "Snell Roundhand, cursive",
  fontWeight: "bold",
  fontStyle: "italic",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
};

export default Navbar;
