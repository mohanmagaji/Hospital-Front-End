import React from 'react'
import Head from '../components/Head'
import Biography from '../components/Biography'
import Department from '../components/Department'
import MessageFrom from '../components/MessageFrom'

const Homee = () => {
  return (
    <>
     <Head 
        title={ 
          "Welcome to NrupaCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/doctorhero.png"}
      />
      <Biography  />
      <Department />
      <MessageFrom/>
    </>
  )
}

export default Homee
