import React from 'react'
import Hero from '../components/Hero'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageForm from '../components/MessageForm'

const Home = () => {
  return (
    <>
     <Hero 
        title={ 
          "Welcome to NrupaCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"department/doctorhero.png"}
      />
      <Biography  />
      <Department />
      <MessageForm/>
    </>
  )
}

export default Home;