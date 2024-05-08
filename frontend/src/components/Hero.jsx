import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1 className="animated-text" >{title}</h1>
          <p className="animated-text">
            Nrupa Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            NrupaCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          
              In the bustling corridors of healthcare, where white coats brush against digital screens, there exists a beacon of hope—a place where human empathy converges with artificial intelligence. Nrupa Care, founded in the year 2021, stands as a testament to the harmonious fusion of specialized doctors, data-driven insights, and futuristic solutions. Let us delve into the intricate tapestry of Nrupa’s mission, services, and impact.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          
        </div>
      </div>
    </>
  );
};

export default Hero