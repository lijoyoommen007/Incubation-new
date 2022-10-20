import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../components/Admin/AdminHeader'
import BookingSlots from '../components/Admin/BookingSlot'
import { UserContext } from '../Store/UserContext'

function Booking() {
  const {adminDetails}=useContext(UserContext)
  const navigate=useNavigate()

useEffect(() => {
  if(adminDetails){
    navigate('/admin/booking')
  }else{
    navigate('/admin/login')
  }
}, [])

  return (
   <>
   <AdminHeader/>
   <BookingSlots/>
   </>
  )
}

export default Booking