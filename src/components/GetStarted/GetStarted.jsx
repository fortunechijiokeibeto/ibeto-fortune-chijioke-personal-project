import React from "react";
import "./GetStarted.css";
import { Link, useLocation } from "react-router-dom";

const GetStarted = () => {
  const location = useLocation();

  return (
    <section id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started with Habita</span>
          <span className="secondaryText">
            Subscribe and find super attractive quotes from our trusted vendors <br />
            Find your happy place with us.
          </span>
          <button className="button">
            <Link to="/login" state={{ backgroundLocation: location }}>
              Get Started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;