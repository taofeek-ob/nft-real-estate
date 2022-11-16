import React, { useRef, useState } from "react";

import Showcase from "../../components/card/Showcase";
import dataMarket from "./dataMarket";
import { GiSettingsKnobs } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";
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
        <button>Carbins</button>
        <button>Off-grid</button>
        <button>Farm</button>

        <div class="dropdown">
          <button className="dropbtn">
            Filter by: <BsChevronDown />
          </button>
          <div id="myDropdown" className="dropdown-content">
            <span>Restaurant</span>
            <span>Cottage</span>
            <span>Castle</span>
            <span>fantast</span>
            <span>Custom</span>
            <span>beach</span>
            <span>Carbins</span>
            <span>Off-grid</span>
            <span>Farm</span>
          </div>
        </div>
        <button className="location">
          Location <GiSettingsKnobs />
        </button>
      </div>
      <Showcase data={dataMarket} />
    </div>
  );
};

export default Market;
