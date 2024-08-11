import React, { useState } from "react";

import "./header.css";
import Navbar from "../navbar/Navbar";
import Body from "../Body/Body";

function Header() {
  const facilities = [
    "Free Shiping",
    "99% Satisfied Customers",
    "Originality Gaurantied",
  ];
  const facilitiesDis = [""];

  return (
    <>
      <div className="header">
        <Navbar />
        <div className="header-content">
          <p className="header-sale">SALE</p>
          <h1 className="header-heading">
            STOCKTAKE SALE <br /> UPTO 70% OFF
          </h1>
          <p className="header-buynow">
            SHOP NOW{" "}
            <a href="#">
              <img src="/images/right-arrow.png" alt="right arrow" />
            </a>
          </p>
        </div>
        <div className="header-bottom row justify-content-center">
          <div className="col-lg-8 col-md-8">
        <div className="facilities-container row">

          {facilities.map((facility, index) => (
            <div className ="facility col-lg-3 col-md-3 col-sm-8" key={index}>
              <p className="facility-h">{facility}</p>
              <p className="facility-dis">Fat new smallness few Spausing</p>
            </div>
          ))}</div>
        </div>
        <div className="slide-buttons col-lg-4 col-md-4">

          </div></div>
        
      </div>
        <Body />
        
    </>
  );
}

export default Header;
