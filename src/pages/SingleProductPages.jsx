import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

const SingleProductPages = () => {
    const {id}= useParams()

const [product,setProduct] = useState(null)
const [isLoading,setIsLoading]=useState(false)
const [error,setError]=useState('')

const [count,setCount] = useState(0)

  useEffect(() =>{
     const fetchProduct = async () => {
      setIsLoading(true)
      setError('')
      
    try {
      const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`)
     setProduct(response.data)
    } catch (error) {
      console.log(error)
      setError('')
    }finally{
       setIsLoading(false)
    }
  }
  //calling fetch products funtion
  fetchProduct()
  },[])

console.log(product)
  
if(isLoading) return <p>loading ...</p>
if(error) return <p>something went wrong!</p>
  return (
  <div className='max-w-6xl mx-10 my-10'>
      <h1>{product?.title}</h1>

      <button className='bg-teal-500 text-white px-4 py-2 rounded-md'>add</button>
      <p>quantity: {count}</p>
      <button className='bg-teal-500 text-white px-4 py-2 rounded-md'>subtract</button>
    </div>
  )
}

export default SingleProductPages