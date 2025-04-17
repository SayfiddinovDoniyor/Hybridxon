import React from "react";
import { useNavigate, Outlet } from "react-router-dom"; // include Outlet!

const AdminPanel = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    display: "inline-block",
    padding: "12px 24px",
    margin: "8px",
    fontSize: "1.2rem",
    color: "#ecf0f1",
    backgroundColor: "#34495e",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const handleNavigate = (path) => {
    navigate(`/admin/${path}`);
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
        <h1 style={{ marginBottom: "30px" }}>Admin Panel</h1>

        <div>
          <button style={buttonStyle} onClick={() => handleNavigate("dashboard")}>
            Dashboard
          </button>
          <button style={buttonStyle} onClick={() => handleNavigate("sell-requests")}>
            Sell Requests
          </button>
          <button style={buttonStyle} onClick={() => handleNavigate("add-book")}>
            Add Book
          </button>
        </div>

        {/* 🔥 Add this line to render nested routes */}
        <div style={{ marginTop: "40px" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;