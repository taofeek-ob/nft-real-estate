import React from "react";
import Card from "../../components/card/Card";
import Showcase from "../../components/card/Showcase";
import dataMarket from "./dataMarket";

import "./market.scss";
const Market = () => {
  return (
    <div className="showcase_wrapper">
      <div className="nav">
        <button>Restaurant</button>
        <button>Cottage</button>
        <button>Castle</button>
        <button>fantast city</button>
        <button>beach</button>
        <button>Carbine</button>
        <button>off-grid</button>
        <button>Farm</button>
        <button>Location</button>
      </div>
      <Showcase data={dataMarket} />
    </div>
  );
};

export default Market;
