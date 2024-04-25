import React from 'react'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Aboutus = () => {



  return (
    <>
    <div className='container biography  'style={{marginTop:"50px", alignItems:"center"}} >
    <div className='banner' >
    <img src={"/whoweare.png"} alt="hero" className="animated-image2" />
        
    </div>
    <div className='margin banner animated-image'>
      <p>Biography</p>
      <h1>Who We Are</h1>
      <p>
      Nrupa Care’s impact isn’t quantifiable in prescriptions or lab reports. It’s in the tearful gratitude of a cancer survivor, the laughter of a child with asthma, the elderly couple holding hands in the waiting room. As technology evolves, Nrupa remains steadfast. It’s not just about healing; it’s about harmonizing humanity and science.
        </p>
    </div>
  </div>
  
  <div className='container biography animated-text'>
    <div className='banner'>
    
        
    </div>
    <div className='container  animated-text'>
      <h1 style={{textAlign:"center"}}>From Cure To Care</h1><br/>
    <p>
      The Shift from cure to care will only happen when we're preventive.That's where predictive AI Technology comes in; and takes your lifestyle,symptoms,genetics along with your results to predict rist.
      After your digital reports come in,our expert doctor helps interpret the  results and discover your path to wellness, supported by health mentors when needed.
    </p>
    </div>
    </div>
    <div className=' ' style={{display:"flex", width:"100%", textAlign:"center", justifyContent:"center"}}>
      <div>
      <img style={{width:"300px"}} src="care1.png" alt="" />
      </div>
      <div>
      <img style={{width:"300px"}} src="care2.png" alt="" />
      </div>
      <div>
      <img style={{width:"300px"}} src="care3.png" alt="" />
      </div>
    </div>
  

  <div className='container departments scrollup'>
      <h2 style={{textAlign:"center"}}>Testimonials</h2>
      <div className='container departments scrollup' style={{display:"flex", alignItems:"center" }}>
              <div className="card testimonials">
              
                <p style={{paddingBottom:"25%", fontFamily:"cursive"}}><span style={{fontFamily:"cursive"}}>Raghuveer:</span><br/><br/>
                “Living in a remote village, I thought quality healthcare was beyond my reach. Nrupa’s telemedicine service changed that. Dr. Patel’s virtual consultations made me feel like I was right there in the clinic.”</p>
              
              </div>
               <div className="card">
              
               <p style={{paddingBottom:"25%", fontFamily:"cursive"}}><span style={{fontFamily:"cursive"}}>Vishnu:</span><br/><br/>
               “Precision medicine sounded like science fiction until Dr. Khan explained how my unique genetic makeup influenced my response to medications. Nrupa’s tailored treatment plan transformed my life.”</p>             
             </div>

             <div className="card">
              
               <p style={{paddingBottom:"25%", fontFamily:"cursive"}}><span style={{fontFamily:"cursive"}}>Anandha Rao:</span><br/><br/>
               “The AI algorithms at Nrupa Care detected my early-stage breast cancer. Dr. Gupta and the digital sentinels saved me from a silent threat. Now, I’m cancer-free, thanks to their vigilance.”</p>
             
             </div>
             </div>

    </div>
  </>
  )
}

export default Aboutus
