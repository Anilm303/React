import React from 'react'

const ProtectedRoute = () => {

    const isAuthenticated = false
  return !isAuthenticated && <Navigate to='/'/>
}

export default ProtectedRoute