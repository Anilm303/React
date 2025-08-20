import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPages = () => {
    const navigate = useNavigate()

    // const handelNavigate = () =>{
    //     navigate('/')
    // }
  return (
    <div>
        404 page is Not Found.
        <button onClick={() => navigate('/')} className='bg-teal-500 text-white'> 
          go back to home page
        </button>
    </div>
  )
}

export default NotFoundPages