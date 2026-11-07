import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandlerPkg from "react-outside-click-handler";
import { Link, useLocation } from "react-router-dom";

const OutsideClickHandler =
  OutsideClickHandlerPkg.default || OutsideClickHandlerPkg;

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  const getMenuStyles = (opened) => {
    if (document.documentElement.clientWidth <= 768) {
      return { right: opened ? "1.5rem" : "-150%" };
    }
    return {};
  };

  const scrollToSection = (id) => {
    setMenuOpened(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h2-wrapper">
      <div className="flexCenter paddings innerWidth h2-container">
        {/* Brand Logo */}
        <img
          src="./habita.png"
          alt="logo"
          width={100}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ cursor: "pointer" }}
        />

        {/* Navigation & Mobile Toggle Container */}
        <OutsideClickHandler
          disabled={!menuOpened}
          onOutsideClick={() => setMenuOpened(false)}
        >
          <div className="menu-wrapper">
            <div
              className="flexCenter h-menu"
              style={getMenuStyles(menuOpened)}
            >
              <span onClick={() => scrollToSection("residencies")}>
                Residencies
              </span>
              <span onClick={() => scrollToSection("value")}>Our Value</span>
              <span onClick={() => scrollToSection("contact")}>Contact Us</span>
              <span onClick={() => scrollToSection("get-started")}>
                Get Started
              </span>
              <button className="button">
                <Link to="/login" state={{ backgroundLocation: location }}>
                  Contact
                </Link>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div
              className="menu-icon"
              onClick={(e) => {
                e.stopPropagation();
                setMenuOpened((prev) => !prev);
              }}
            >
              <BiMenuAltRight size={30} />
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;