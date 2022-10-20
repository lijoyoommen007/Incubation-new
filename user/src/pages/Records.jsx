import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../components/Admin/AdminHeader'
import RecordList from '../components/Admin/RecordList'
import { UserContext } from '../Store/UserContext'

function Records() {
  const {adminDetails}=useContext(UserContext)
  const navigate=useNavigate()

useEffect(() => {
  if(adminDetails){
    navigate('/admin/records')
  }else{
    navigate('/admin/login')
  }
},[])

  return (
    <>
    <AdminHeader/>
    <RecordList/>
    </>
  )
}

export default Records