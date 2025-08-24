import React, { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useDispatch, useSelector } from 'react-redux'
import { loginSucess } from '../redux/AuthSlice'

const HomePages = () => {

  const {count,increment,decrement}= useContext(CounterContext)

  const dispatch = useDispatch()

  const {user, isAuthenticated} = useSelector(state => state.auth)
  console.log(isAuthenticated)

  const login = () =>{
    dispatch(loginSucess('ram magar'))
  }
  return (


    <div className='p-10'>this is HomePages. count:{count}
    <button onClick={increment}> add</button>
     <button onClick={decrement}> sub</button>
    <div>
      <p>Username: {user}</p>
    </div>
    <div>
      <button onClick={login} className='bg-teal-700 text-white px-4 py-2 rounded-b-md cursor-pointer'> login</button>
    </div>
    <p>
      {isAuthenticated ? "user is loggin" : "user is not loggin"}
    </p>
    </div>
  )
}

export default HomePages