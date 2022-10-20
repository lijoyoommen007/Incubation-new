import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../components/Admin/AdminHeader'
import Users from '../components/Admin/User'
import { UserContext } from '../Store/UserContext'

function UsersAdmin() {
  const {adminDetails}=useContext(UserContext)
  const navigate=useNavigate()

useEffect(() => {
  if(adminDetails){
    navigate('/admin/users')
  }else{
    navigate('/admin/login')
  }
}, [])

  return (
    <>
    <AdminHeader/>
    <Users/>
    </>
  )
}

export default UsersAdmin