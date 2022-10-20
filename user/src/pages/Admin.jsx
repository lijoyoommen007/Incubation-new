import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminHeader from '../components/Admin/AdminHeader'
import ApplicantList from '../components/Admin/ApplicationList'
import { UserContext } from '../Store/UserContext'

function Admin() {
  const {adminDetails}=useContext(UserContext)
    const navigate=useNavigate()

  useEffect(() => {
    if(adminDetails){
      navigate('/admin')
    }else{
      navigate('/admin/login')
    }
  }, [])

  return (
    <>
    <AdminHeader/>
    <ApplicantList/>
    </>
  )
}

export default Admin