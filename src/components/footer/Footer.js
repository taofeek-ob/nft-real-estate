import React from "react";
import { FooterLogo } from "../../assets/images";
import { CgFacebook, CgCopyright } from "react-icons/cg";
import { GrTwitter } from "react-icons/gr";
import { BsInstagram } from "react-icons/bs";
import "./footer.scss";
const footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src={FooterLogo} alt="FooterLogo" />

        <div className="socials">
          <CgFacebook fill="white" />
          <GrTwitter fill="white" />
          <BsInstagram fill="white" />
        </div>

        <span>
          <CgCopyright fill="white" /> 2022 Metabnb
        </span>
      </div>
      <div>
        <h4>Places</h4>
        <h6>NFTs</h6>
        <h6>Tokens</h6>
        <h6>Landlords</h6>
        <h6>Discord</h6>
      </div>
      <div>
        <h4>About us</h4>
        <h6>Castle</h6>
        <h6>Farms</h6>
        <h6>Beach</h6>
        <h6>Learn more</h6>
      </div>
      <div>
        <h4>Community</h4>
        <h6>Road map</h6>
        <h6>Creators</h6>
        <h6>Career</h6>
        <h6>Contact us</h6>
      </div>
    </footer>
  );
};

export default footer;
