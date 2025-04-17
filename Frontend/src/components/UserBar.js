import React from "react";
import { useNavigate } from "react-router-dom";

const UserBar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "1rem",
        right: "1rem",
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#fff",
        padding: "0.5rem 1rem",
        borderRadius: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={user.photo || "/images/Profile.png"}
        alt="profile"
        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
      />
      <span style={{ fontWeight: "bold" }}>{user.name}</span>
      <button className="btn btn-outline-primary btn-sm" onClick={() => navigate("/profile")}>
        Profile
      </button>
    </div>
  );
};

export default UserBar;