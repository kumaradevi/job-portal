import "./Feature.css";
import React from "react";

const Feature = () => {
  return (
    <div>
      <h1>Featured Jobs</h1>
      <div className="main-card">
        <div className="mini-cards">
          <p>Part Time</p>
          <h2>Part-Time English Teacher For Students</h2>
          <p>Foundations International School</p>
        </div>

        <div className="mini-cards">
          <p>Part Time</p>
          <h2>Full-Time English/Daycare Teacher </h2>
          <p>My Tomodachi Japan</p>
        </div>

        <div className="mini-cards">
          <p>Full Time</p>
          <h2>Creative and Marketing Manager</h2>
          <p>Undone Japan</p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
