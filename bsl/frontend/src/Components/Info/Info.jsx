
import React from 'react';
import './Info.css';
import read from '../Assets/read.jpg';

const Info = () => {
  return (
    <div className="reading">
          <div className="start-line"></div>
      <div className="reading-header">
        <div className="reading-text">
          <h1>Top booming life science fields</h1>
          <p className="info-para">
            "The future of life sciences is incredibly promising,<br />
            with transformative breakthroughs in biotechnology,<br />
            genomics, AI, personalized medicine, and regenerative therapies<br />
            shaping the world."
          </p>
        </div>
        <img src={read} alt="Read" />
      </div>
      <button className="read-more-btn">Read More</button>

    </div>
  );
};

export default Info;

