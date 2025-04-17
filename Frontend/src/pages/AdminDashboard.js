import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const storedFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    setFeedbacks(storedFeedbacks);
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
        <h2 style={{ marginBottom: "20px" }}>Feedback Dashboard</h2>
        {feedbacks.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {feedbacks.map((feedback, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#34495e",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "8px",
                  textAlign: "left",
                }}
              >
                <p style={{ fontSize: "1.1rem", marginBottom: "8px" }}>{feedback.feedback}</p>
                <small style={{ color: "#bdc3c7" }}>
                  {new Date(feedback.date).toLocaleString()}
                </small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No feedbacks available.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;