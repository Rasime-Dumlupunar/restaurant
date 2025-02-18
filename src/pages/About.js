import React from "react";
import Banner from "../assets/BannerImage.png";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us </h1>
        <p>
          At Burger 03, we bring true burger lovers together with the best
          flavors! Our burgers, made with the finest ingredients and crafted
          with our special recipes, are delivered to you quickly and reliably.
          For us, a burger is not just food—it’s an experience! Our meats are
          freshly selected daily, our buns are specially baked, and our
          signature sauces are prepared with care. With a variety of menu
          options, we cater to every taste and take your burger enjoyment to the
          next level. At Burger 03, customer satisfaction is our top priority.
          With our easy ordering system, fast delivery, and friendly service, we
          are here to provide you with the best burger experience.
        </p>
      </div>
    </div>
  );
}

export default About;
