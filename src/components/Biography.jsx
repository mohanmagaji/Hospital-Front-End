import React from 'react'

const Biography = (imageUrl) => {
  return (
    <div className='container biography'>
      <div className='banner'>
      <img src={"/whoweare.png"} alt="hero" className="animated-image2" />
          
      </div>
      <div className='banner animated-text2'>
        <p>Biography</p>
        <h1>Who We Are</h1>
        <p>
        In the bustling corridors of healthcare, where white coats brush against digital screens, there exists a beacon of hope a place where human empathy converges with artificial intelligence. Nrupa Care, founded in the year 2021, stands as a testament to the harmonious fusion of specialized doctors, data-driven insights, and futuristic solutions. Let us delve into the intricate tapestry of Nrupa’s mission, services, and impact.
        Nrupa envisions a world where healthcare transcends geographical boundaries. It dreams of a seamless continuum from rural villages to bustling metropolises where every patient receives personalized care backed by data-driven precision. The vision extends beyond curing ailments; it embraces preventive measures, mental well-being, and holistic health.
        Nrupa’s mission orchestrates a symphony of expertise. Imagine a concert hall where specialized doctors, AI specialists, nurses, and caregivers wield their instruments the stethoscope, the algorithm, the warm touch to create healing melodies. Their collective goal: to compose health narratives that resonate with hope.
        Within Nrupa’s hallowed halls, doctors don’t merely diagnose; they decode life stories. Cardiologists, oncologists, neurologists they form a constellation of brilliance. 
        </p>
      </div>
    </div>
  )
}

export default Biography
