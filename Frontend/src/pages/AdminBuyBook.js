import React, { useEffect, useState } from "react";

const BuyRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("sellRequests");
    if (data) {
      setRequests(JSON.parse(data));
    }
  }, []);

  return (
    <div>
      <h2>Sell Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {requests.map((req, index) => (
            <li
              key={index}
              style={{
                backgroundColor: "#fff",
                color: "#333",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <strong>{req.title}</strong> by {req.author} — Price: {req.price}
              <br />
              <small>{new Date(req.timestamp).toLocaleString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BuyRequests;
