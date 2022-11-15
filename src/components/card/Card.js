import React from "react";
import Rating from "./Rating";

import Heart from "./Heart";
const Card = ({ element }) => {
  return (
    <div className="card_div">
      <img src={element} alt="" />
      <span className="heart">
        <Heart />
      </span>
      <div className="details">
        <div>
          <span>Desert King</span>
          <span>250km Away</span>
          <div className="rating">
            <Rating amount={5} />
          </div>
        </div>
        <div>
          <span style={{ fontWeight: "bold" }}>1MBT Per Night</span>
          <span>available for 2 weeks stay</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
