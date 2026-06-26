import React, { useState } from "react";

const UserProfileCard = () => {
  const [player, setPlayer] = useState({
    name: "Virat Kohli",
    role: "Batsman",
    country: "India",
  });

  return (
    <div className="container">
      <h1> User Profile Card</h1>

      <div className="text-center mb-4">

        <button
          className="btn btn-primary m-2"
          onClick={() =>
            setPlayer({
              name: "Virat Kohli",
              role: "Batsman",
              country: "India",
            })
          }
        >
          Virat Kohli
        </button>

        <button
          className="btn btn-success m-2"
          onClick={() =>
            setPlayer({
              name: "Rohit Sharma",
              role: "Batsman",
              country: "India",
            })
          }
        >
          Rohit Sharma
        </button>

        <button
          className="btn btn-warning m-2"
          onClick={() =>
            setPlayer({
              name: "MS Dhoni",
              role: "Wicket Keeper & Finisher",
              country: "India",
            })
          }
        >
          MS Dhoni
        </button>

      </div>

      <div className="profile-card">

        <h2>{player.name}</h2>

        <hr />

        <p>
          <strong>Role :</strong> {player.role}
        </p>

        <p>
          <strong>Country :</strong> {player.country}
        </p>

      </div>
    </div>
  );
};

export default UserProfileCard;