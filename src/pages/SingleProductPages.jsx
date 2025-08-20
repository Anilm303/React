import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPages = () => {
    const {id}= useParams()

  
  return (
    <div>SingleProductPages {id}</div>
  )
}

export default SingleProductPages