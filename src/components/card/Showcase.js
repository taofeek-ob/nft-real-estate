import React from "react";
import Card from "./Card";
import "./showcase.scss";
const Showcase = ({ data }) => {
  return (
    <div className="showcase">
      {data.map((element, index) => {
        return <Card element={element} key={index} />;
      })}
    </div>
  );
};

export default Showcase;
