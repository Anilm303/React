import React from 'react'

const ProtectedRoute = () => {

    const isAuthenticated = true
  return !isAuthenticated && <Navigate to='/'/>
}

export default ProtectedRoute