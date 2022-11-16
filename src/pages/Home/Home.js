import React from "react";
import {
  HeroImage,
  Mbtoken,
  Metamask,
  NFTCardS,
  Opensea,
} from "../../assets/images/";

import Showcase from "../../components/card/Showcase";

import Data from "./data";
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

      <div className="img_wrapper">
        <img src={HeroImage} alt="Hero" />
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="banner">
      <div>
        <img src={Mbtoken} alt="MbToken logo" style={{ marginRight: "-8px" }} />
        <h3>MbToken</h3>
      </div>
      <div>
        <img src={Metamask} alt="Metamask logo" />
        <h3>Metamask</h3>
      </div>
      <div>
        <img src={Opensea} alt="Opensea Logo" />
        <h3>Opensea</h3>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about_text">
        <h1>Metabnb NFTs</h1>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn More</button>
      </div>
      <div className="img_wrapper">
        <img src={NFTCardS} alt="NFT Cards Stacked" />
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <>
      <Hero />
      <Banner />
      <div className="showcase_wrapper">
        <h1>Inspiration for your next adventure</h1>
        <Showcase data={Data} />
      </div>

      <About />
    </>
  );
};

export default Home;
