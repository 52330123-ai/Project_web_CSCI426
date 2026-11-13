import React from "react";
import "../Styles/AboutUs.css";
const AboutUs = () => {
  return (
    <div className="about">
      <div className="about-title">
        <p>Our story</p>
        <div>
          <h2>Made for everyday confidence</h2>
        </div>
      </div>

      <div className="about-us">
        <div className="container">
          <h3>About A STORE</h3>
          <p>
            A STORE brings together thoughtful essentials, premium design, and
            modern living. We curate products that help people feel inspired,
            organized, and comfortable every day.
          </p>
        </div>

        <div className="container">
          <h3>Our mission</h3>
          <p>
            To create a seamless shopping experience rooted in quality, trust,
            and product value. We believe that good design should feel
            effortless and functional.
          </p>
        </div>

        <div className="container">
          <h3>Quality</h3>
          <p>
            We prioritize materials, durability, and performance in every
            product we offer.
          </p>
        </div>

        <div className="container">
          <h3>Integrity</h3>
          <p>
            Honest product curation and transparent pricing are the foundation
            of our brand
          </p>
        </div>

        <div className="container">
          <h3>Style</h3>
          <p>
            We design for people who appreciate harmony between beauty and
            practicality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
