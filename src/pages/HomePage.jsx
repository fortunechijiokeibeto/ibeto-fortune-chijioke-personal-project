import React from "react";
import "../App.css";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Companies from "../components/Companies/Companies";
import Residencies from "../components/Residencies/Residencies";
import Value from "../components/Value/Value";
import Contact from "../components/Contact/Contact";
import GetStarted from "../components/GetStarted/GetStarted";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <div className="App">
      <div style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>

      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;