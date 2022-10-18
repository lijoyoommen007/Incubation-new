import React,{useContext} from 'react'
import Header from '../components/user/Header'
import Application from '../components/user/Application' 
import HomeContent from '../components/user/Home'
import {UserContext} from '../Store/UserContext'
import Success from '../components/user/Success'

function Home() {
    const {userDetails} = useContext(UserContext)
  return (
        <>
        <Header/>
        {userDetails?(userDetails.isRegistered? <Success/> :<Application/> ):<HomeContent/> }
        </>
  )
}

export default Home