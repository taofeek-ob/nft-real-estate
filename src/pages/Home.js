import React from "react";
import HeroImage from "../assets/images/hero.png";

import "./home.scss";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_text">
        <h1>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h1>
        <h4>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </h4>
        <div className="input_wrapper">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search for location"
          />
          <button>Search</button>
        </div>
      </div>
      <img src={HeroImage} alt="" />

      {/* <div className="img_wrapper">
        <img src={HeroImage} alt="" />
      </div> */}
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <h3>METAMASK</h3>
      <h3>MBTOKEN</h3>
      <h3>OPENSEA</h3>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
    </>
  );
};

export default Home;
