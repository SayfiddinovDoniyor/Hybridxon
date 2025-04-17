import React, { useEffect, useState } from "react";

const Bubbles = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [
        ...prevBubbles,
        {
          id: Math.random(),
          size: Math.random() * 50 + 20,
          left: Math.random() * 100,
        },
      ]);

      setTimeout(() => {
        setBubbles((prev) => prev.slice(1));
      }, 5000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Bubbles;
