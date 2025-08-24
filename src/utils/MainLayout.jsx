import React from 'react'
import Navbar from '../compenents/NavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default MainLayout