import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | NrupaCare Medical Institute"}
        imageUrl={"department/about.png"}
      />
      <Biography imageUrl={"department/whoweare.png"} />
    </>
  );
};

export default AboutUs;