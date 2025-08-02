import React, {useState , useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";

function DashBoard() {
    const [internData , setinternData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/intern`)
          .then((res) => res.json())
          .then((data) => setinternData(data))
          .catch((err) => console.log("Could not fetch data!"));
    } , []);

    if (!internData) return <p>Loading...</p>;

    return (
      <div className="container">
        <h2>Welcome, {internData.name}</h2>
        <p>Referral Code: {internData.referralCode}</p>
        <p>Total Donations Raised: ₹{internData.donationsRaised}</p>

        <h3>Rewards</h3>
        <ul className="rewards-list">
          {internData.Rewards.map((rewards, index) => (
            <li key={index}>{rewards}</li>
          ))}
        </ul>

        <div className="button-container">
          <button onClick={() => navigate("/leaderboard")}>
            View Leaderboard
          </button>
        </div>
      </div>
    );

}

export default DashBoard;