import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function LeaderBoard() {
  const [leaders, setLeader] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/leaderBoard`)
      .then((res) => res.json())
      .then((data) => setLeader(data))
      .catch((err) => console.log("No Leaders!"));
  }, []);

  if (!leaders) {
    return <p>Loading....</p>;
  }

  return (
    <div className="container">
      <div className="card">
        <h2>Leaderboard</h2>
        <ol className="leader-list">
          {leaders.map((person, index) => (
            <li key={index} className="leader-item">
              <span>{person.name}</span>
              <span>₹{person.donationsRaised}</span>
            </li>
          ))}
        </ol>
        <button className="btn" onClick={() => navigate("/dashboard")}>
          Back to Dashboard
        </button>
      </div>
    </div>
  );

}

export default LeaderBoard;
