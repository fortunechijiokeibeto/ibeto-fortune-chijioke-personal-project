import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./habita2.png" alt="logo" width={120} />
          <span className="secondaryText" style={{ color: "#707070", lineHeight: "1.5" }}>
            Our vision is to improve the quality of life <br />
            for as many people as we can.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Address</span>
          <span className="secondaryText" style={{ color: "#444444", fontWeight: 500 }}>
            Km 14 Owerri/Aba Road, Ulakwo, Owerri North, Imo State.
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;