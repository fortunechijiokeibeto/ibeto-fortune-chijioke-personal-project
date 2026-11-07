import React from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left-side with floating image */}
        <div className="v-left">
          <div className="image-container floating-image">
            <img src="./value.png" alt="value" />
          </div>
        </div>

        {/* right-side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value We Give To You</span>
          
          {/* Explicit v-desc class added here */}
          <span className="secondaryText v-desc">
            We are always ready by providing the best services for you. <br />
            We believe a good place to thrive is essential in all regards.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem className="accordionItem" key={i} uuid={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText" style={{ fontSize: "1.1rem" }}>
                        {item.heading}
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="accordionPanel">
                    <p className="secondaryText" style={{ color: "#707070", fontSize: "0.9rem", lineHeight: "1.5" }}>
                      {item.detail}
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;