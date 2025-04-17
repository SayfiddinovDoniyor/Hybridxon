import React, { useState, useRef } from "react";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const fileInputRef = useRef(null);

  if (!user)
    return (
      <p
        style={{
          fontFamily: "Snell Roundhand, cursive",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Please log in.
      </p>
    );

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result;

      const updatedUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
        coins: user.coins,
        photo: base64Data,
      };

      fetch(`http://localhost:8080/api/users/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const mergedUser = { ...user, ...data }; // Keep original fields if missing
          localStorage.setItem("user", JSON.stringify(mergedUser));
          setUser(mergedUser);
        })
        .catch((err) => console.error("Failed to update user photo:", err));
    };
    reader.readAsDataURL(file);
  };

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div
        className="p-4 shadow-lg"
        style={{
          background: "linear-gradient(135deg, #F7CAC9, #92A8D1)",
          borderRadius: "25px",
          color: "#fff",
          textAlign: "center",
          fontFamily: "Snell Roundhand, cursive",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            marginBottom: "1.5rem",
            textShadow: "1px 1px 4px rgba(0,0,0,0.3)",
          }}
        >
          Your Profile 👤
        </h2>

        <div
          style={{
            position: "relative",
            display: "inline-block",
            marginBottom: "1rem",
            cursor: "pointer",
          }}
          onClick={handleImageClick}
        >
          <img
            key={user.photo}
            src={user.photo || "/images/Profile.png"}
            alt="profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              border: "3px solid white",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            ref={fileInputRef}
            style={{ display: "none" }}
          />
        </div>

        <h4 style={{ fontWeight: "bold", fontSize: "1.6rem" }}>{user.name}</h4>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>UserCoins:</strong> {user.coins ?? 0}
        </p>
      </div>
    </div>
  );
};

export default Profile;