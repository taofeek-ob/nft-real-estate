import React from "react";
import Rating from "./Rating";

const Card = ({ element }) => {
  return (
    <div>
      <img src={element} alt="" />
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
