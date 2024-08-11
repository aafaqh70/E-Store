import React from "react";
import "./body.css";
import { Link } from "react-router-dom";
import Header from "../header/header";
import Footer from "../Footer/footer";

function Body() {
  const foryouProducts = [
    {
      name: "Bagpack",
      imagesrc: "/images/product-1.png",
    },
    {
      name: "Digital Watch",
      imagesrc: "/images/product-2.png",
    },
    {
      name: "Brown Bag",
      imagesrc: "/images/product-3.png",
    },
    {
      name: "Sunglases",
      imagesrc: "/images/product-4.png",
    },
  ];
  const newarrivalProducts = [
    {
      name: "Louis Vuitton Bag",
      imagesrc: "/images/New-product-1.png",
    },
    {
      name: "Louis Vuitton Bag",
      imagesrc: "/images/new-product-2.png",
    },
    {
      name: "Louis Vuitton Bag",
      imagesrc: "/images/new-product-3.png",
    },
    {
      name: "Louis Vuitton Bag",
      imagesrc: "/images/new-product-4.png",
    },
  ];
  const WhyUs = [
    {
      name: "Free Shipping",
      imagesrc: "/images/truck.png",
    },
    {
      name: "Easy Payments",
      imagesrc: "/images/pay.png",
    },
    {
      name: "Moneyback Gaurentee",
      imagesrc: "/images/shield.png",
    },
    {
      name: "Finest Quality",
      imagesrc: "/images/quality.png",
    },
  ];
  const logos = [
    "/images/logo1.png",
    "/images/logo2.png",
    "/images/logo3.png",
    "/images/logo4.png",
    "/images/logo5.png",
    "/images/logo6.png",
  ];

  const menColl = {
    catergory: "men's clothing"
  }
  const womenColl = {
    catergory: "women's clothing"
  }

  return (
    <>
    <Header />
      <div class="banner-row row justify-content-center">
        <div class="banner col-lg-4 col-md-4">
          <div class="image-container-men">
            <img
              src="/images/men-coll.png"
              class="img-fluid"
              alt="Men Collection"
            />
            <div className="banner-text men">
              <h5 className="banner-heading">
                Men's Casual
                <br /> Fashion Style
              </h5>
              <p className="banner-viewall">
                SHOP NOW
                <Link to="/collection" state={{ category: "men's clothing" }}>
                  <img src="/images/right-arrow.png" alt="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div class="banner col-lg-4 col-md-4">
          <div class="image-container-women">
            <img
              src="/images/women-coll.png"
              class="img-fluid"
              alt="Women Collection"
            />
            <div className="banner-text women">
              <h5 className="banner-heading">
                Women's Casual
                <br /> Fashion Style
              </h5>
              <p className="banner-viewall">
                SHOP NOW
                <Link to="/collection" state={{ category: "women's clothing" }}>
                  <img src="/images/right-arrow.png" alt="" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="foryou-row row justify-content-center">
        <div className="col-8">
        <div className="foryou-row row justify-content-between">
          <div className="textbtn">
          <h3 className="">Select just for you</h3>
          <Link to="/collection/">
          <button className="foryoubtn">show more</button></Link>
        </div></div>
        </div>
      </div>
      <div class="product-row row justify-content-center">
        {foryouProducts.map((product) => (
          <div class="product col-lg-2 col-md-2">
            <div class="image-container-product">
              <img
                src={product.imagesrc}
                class="img-fluid"
                alt="Men Collection"
              />
              <br />
              <br />
              <p className="productName">{product.name}</p>
              <p className="productPrice">$288.5</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="whyheading">Why Should Choose Us?</h3>
      <div class="product-row row justify-content-center">
        {WhyUs.map((item) => (
          <div class="product col-lg-2 col-md-2">
            <div class="image-container-product">
              <div className="imageContainer">
                <img
                  src={item.imagesrc}
                  class="img-fluid"
                  alt="Men Collection"
                />
              </div>
              <br />
              <p className="itemName">{item.name}</p>
              <p className="itemdis">Fat new smallness few spausing</p>
            </div>
          </div>
        ))}
      </div>
      <div className="foryou-row row justify-content-center">
        <div className="col-8">
        <div className="foryou-row row justify-content-between">
          <div className="textbtn">
          <h3 className="">New Arrivals</h3>
          <Link to="/collection">
          <button className="foryoubtn">show more</button></Link>
        </div></div>
        </div>
      </div>
      <div class="product-row row justify-content-center">
        {newarrivalProducts.map((product) => (
          <div class="product col-lg-2 col-md-2 col-sm-12">
            <div class="image-container-product">
              <img
                src={product.imagesrc}
                class="img-fluid"
                alt="Men Collection"
              />
              <br />
              <br />
              <p className="productName">{product.name}</p>
              <p className="productPrice">$288.5</p>
            </div>
          </div>
        ))}
      </div>
      <div className="newCollection">
        <div className="newCollection-row row">
          <div className="col-lg-4 col-md-4"></div>
          <div className="bottom_div col-lg-8 col-md-8">
            <div className="newCollectio-container row">
              <div className="New-Collection col-lg-6 col-md-6 col-sm-12">
                <h5 className="newCollection-h">New Coolection</h5>
                <p className="newCollection-dis">
                  Lorem ipsum dolor sit amet consectetur adipisicing Quam,
                  delectus necessitatibus. Adipisci, obcaecati laborum.
                </p>
              </div>
              <div className="New-Collection-btn col-6">
                <Link to="/collection/">
                <button>SHOP NOW</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-row row justify-content-center">
        <div className="col-8">
          <div className="logo-row row">
            {logos.map((logo) => (
              <div class="logo col-lg-2 col-md-2">
                <div className="logoContainer">
                  <img src={logo} class="img-fluid" alt="Men Collection" />
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <Footer />
    </>
  );
}

export default Body;
