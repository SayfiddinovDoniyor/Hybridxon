import React, { useEffect, useState } from "react";

const AdminSellRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const storedRequests = JSON.parse(localStorage.getItem("sellRequests")) || [];
    setRequests(storedRequests);
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
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
        <h2 style={{ marginBottom: "20px" }}>Sell Requests</h2>
        {requests.length === 0 ? (
          <p>No sell requests available.</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {requests.map((req) => (
              <li
                key={req.id}
                style={{
                  backgroundColor: "#34495e",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  textAlign: "left",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>{req.title}</h3>
                <p style={{ margin: "5px 0" }}>
                  <strong>Author:</strong> {req.author}
                </p>
                <p style={{ margin: "5px 0" }}>
                  <strong>Price:</strong> ${req.price}
                </p>
                <p style={{ margin: "10px 0" }}>{req.description}</p>
                {req.image && (
                  <img
                    src={req.image}
                    alt={req.title}
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      borderRadius: "5px",
                      marginTop: "10px",
                    }}
                  />
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminSellRequests;