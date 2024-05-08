import React from 'react';

import Hero from "../components/Hero";
import AppointmentForm from '../components/AppointmentForm';




const Appointment = () => {
  return (
    <div>
      <Hero title={"Schedule Your AppointMent || Nrupa Care Institute"}
      imageUrl={"department/Appointment.png"}/>
        <div className='container'>
      <h3>Steps To Fill The Form</h3><br/>
      <p>1. Enter the mandatory details which indlude First Name,LastName,Email,PhoneNumber,Dob,Gender etc...</p><br/>
      <p>2. Every details are restricted based on their relevent information.</p><br/>
      <p>3. Filling unecessary data may not be encouraged and not allowed errors are displayed</p><br/>
      <p>4. Patient must arrive at the respected hospital before 15-min of the allocated appointment time.</p><br/>
      <p>5. Documents are required incase of the patient having health insurance,ID proof for quick verification.</p><br/>
      <p>6. If any quiries related to appointment form please contact our customer service to get help!</p><br/>
      </div>
    <AppointmentForm/>

  
    </div>
  )
}

export default Appointment;