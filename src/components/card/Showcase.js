import React from "react";
import Card from "./Card";
const Showcase = ({ data }) => {
  return (
    <div className="showcase_wrapper">
      <h1>Inspiration for your next adventure</h1>
      <div className="showcase">
        {data.map((element, index) => {
          return <Card element={element} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Showcase;
