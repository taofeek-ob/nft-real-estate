import React from "react";
import Card from "../../components/card/Card";
import Showcase from "../../components/card/Showcase";
import dataMarket from "./dataMarket";

// import "./market.scss";
const Market = () => {
  return <Showcase data={dataMarket} />;
};

export default Market;
