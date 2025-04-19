import React, { useState } from "react";

const About = () => {
  const [opacity, setOpacity] = useState(0.75);
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return;

    const existingFeedbacks = JSON.parse(localStorage.getItem("feedbacks")) || [];
    const newFeedback = {
      feedback,
      date: new Date().toISOString(),
    };
    const updatedFeedbacks = [newFeedback, ...existingFeedbacks];
    localStorage.setItem("feedbacks", JSON.stringify(updatedFeedbacks));
    setMessage("Feedback submitted successfully!");
    setFeedback("");
  };

  return (
    <div 
      className="page" 
      style={{
        background: "linear-gradient(45deg, #D8B5FF, #3BADAE, #D8B5FF)",
        borderRadius: "20px",
        opacity: opacity,
        transition: "opacity 0.3s ease-in-out",
        padding: "20px",
        textAlign: "center",
      }}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0.75)}
    >
      <h2 style={{ color: "#B80F57", fontWeight: "bold", fontStyle: "italic", fontFamily: "URW Chancery L, cursive" }}>About Us</h2>
      <p style={{ color: "#FFFFFF", fontWeight: "bold", fontStyle: "italic", fontFamily: "URW Chancery L, cursive" }}>Welcome to your next chapter — a vibrant haven where book lovers from all walks of life connect, exchange timeless tales, and explore a universe of stories that live beyond the page. Whether you're here to share your favorite reads, discover new literary gems, or dive into digital editions, this is your sanctuary for all things bookish.</p>
      
      <div style={{ marginTop: "30px" }}>
        <h3 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: "20px" }}>Our Team</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {[
            { name: "Asila Muxitdinova", role: "Co-Founder", img: "https://via.placeholder.com/150" },
            { name: "Doniyor Sayfiddinov", role: "Co-Founder", img: "https://sl.bing.net/jFFa3Hgpbga" }
          ].map((member, index) => (
            <div key={index} style={{ background: "#fff", padding: "20px", borderRadius: "15px", textAlign: "center", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", maxWidth: "200px" }}>
              <img src={member.img} alt={member.name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
              <h3 style={{ color: "#B80F57", marginTop: "10px" }}>{member.name}</h3>
              <p style={{ color: "#555" }}>{member.role}</p>
            </div>
          ))}
          
      
        </div>
      </div>

      <div >
        <h3 style={{ color: "#fff", fontSize: "1.5rem" }}>Who We Are</h3>
        <p style={{ color: "#fff", fontSize: "1rem", fontStyle: "italic" }}>
          We started out from humble beginnings in Tashkent and we're still here. Although these days we are packing and shipping millions rather than thousands of titles each year. We've grown by offering a great service to each and every customer, wherever they are in the world. That's what makes us proud.
        </p>
      </div>

      <div style={{ marginTop: "50px", padding: "20px", background: "rgba(0, 0, 0, 0.2)", borderRadius: "15px" }}>
        <h3 style={{ color: "#fff", fontSize: "1.5rem" }}>Leave Your Feedback</h3>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <textarea 
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows="4"
            cols="40"
            placeholder="Write your feedback here..."
            style={{ padding: "10px", borderRadius: "10px", border: "none", width: "80%", fontSize: "1rem" }}
            required
          />
          <button 
            type="submit"
            style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#B80F57", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}
          >
            Submit Feedback
          </button>
        </form>
        {message && <p style={{ color: "#fff", marginTop: "10px" }}>{message}</p>}
      </div>
    </div>
  );
};

export default About;
