import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import { UserContext } from '../../Store/UserContext'
import Img from '../../assets/kindpng_34058.png'

function Success() {
  const { userDetails, setUserDetails } = useContext(UserContext)
  const [form,setForm]=useState(null)

  useEffect(()=>{

    Axios.get(`http://localhost:4000/application/${userDetails._id}`).then((response) => {
      if (response.data) {
        console.log(response.data);
        setForm(response.data)
      } else {
        console.log(response)
      }
    }).catch((err) => {
      console.log(err);
    })
  },[])

    return (
        <div className='flex flex-col text-white h-screen justify-center items-center'>
          <div className='w-20'>
            <img className='animate-spin' src={Img} alt="Page not found" />
        </div>
          <h1 className='text-3xl text-amber-400 font-bold'>Application Submitted</h1>
          <h3 className='text-xl'>Your application for Incubation is under process</h3>
          {form?.isBooked? <p>status : <span className='text-green-400 text-xl font-bold'>Approved</span> </p>:
          (form?.isApproved? <p>status : <span className='text-orange-400 text-xl font-bold'>Under process</span> </p> : <p>status : <span className='text-orange-700 text-xl font-bold	'> Pending....</span> </p>)}
        </div>
      )
}

export default Success