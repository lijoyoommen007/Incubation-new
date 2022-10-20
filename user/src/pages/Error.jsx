import React from 'react'
import {Link} from 'react-router-dom'
import errImg from '../assets/error-gef7ba64e8_1280.png'

function Error() {
  return (
      <div className='h-screen flex flex-col justify-center items-center w-full'>
        <Link to={'/'} className='px-2 py-1 bg-blue-600 text-white text-center rounded'>Go Home</Link>
        <div className='max-w-md'>
            <img src={errImg} alt="Page not found" />
        </div>
    </div>
  )
}

export default Error