import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.jpg"

const Hero = () => {
    const [opacity, setOpacity] = React.useState(0.75);
    return (
        <div className="jumbotron text-center bg-light p-5" style={{
            background: "linear-gradient(45deg, #D8B5FF, #3BADAE, #D8B5FF)",
            borderBottomLeftRadius: "20px",
            borderBottomRightRadius: "20px",
            opacity: opacity,
            transition: "opacity 0.3s ease-in-out"
        }}
        onMouseEnter={() => setOpacity(1)}
        onMouseLeave={() => setOpacity(0.75)}
        >

            <img
        src={logo}
        alt="Logo"
        width="80"
        height="80"
        className="Logo"
        style={{
          borderRadius: "50%",
          border: "4px solid #D8B5FF",
          boxShadow: "0px 4px 8px rgba(0.3, 0.3, 0.3, 0.3)",
        }}
      />
            <h1 className="display-4" style={{
                fontSize: "2rem",
                fontFamily: "URW Chancery L, cursive",
                fontWeight: "bold",
                fontStyle: "italic",
                textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
            }}>📚 Welcome to BookLand 📚</h1>
            <p className="lead" style = {{fontSize: "2rem",
                    fontFamily: "URW Chancery L, cursive",
                    fontWeight: "bold",
                    fontStyle: "italic",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.3)"}}>❤️ Discover and enjoy any book you desire, right at your fingertips! ❤️</p>
            <a className="btn btn-lg" href="/sectionsPage" style={{
                background: "linear-gradient(135deg, #CD295A, #FF6EC7)",
                color: "white",
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "Arial, sans-serif",
                border: "none",
                padding: "12px 24px",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "all 0.3s ease",}}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}>Digital Bookshelf 📂</a>
        </div>
    );
};

export default Hero;