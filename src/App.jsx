// import UserProfile from "./compenents/userprofile"
// import './App.css'
// import Counter from "./compenents/Counter"
// import Form from "./compenents/form"
// import UserCard from "./compenents/UserCard"

// const App = () =>{
//   const username = 'john'
//   const a = 20 
//   const b = 30

//   const fruit = ['apple','mango','orange','banana']

//   return(
//     <div>
//       {/* <h1 className="text-red-800 text-2xl font-bold mb-10">hello world</h1>
//       <h2>heading</h2>
//       <p>the usename is {username}</p>
//       <p>the sum of {a} and {b} is {a+b}</p>

//     <UserProfile/> 
//     <UserProfile id={101} username='anil' age={21} address='kathmandu'/>
//     <UserProfile id={102} username='ram' age={23} address='bhaktapur'/>
//     <UserProfile id={103} username='hari' age={41} address='lalitpur'/> */}

//     {/* <h1>list of fruit</h1>
//     {fruit.map((item,index) =>(
//        <p key={index}>{item} </p>
//     ))} */}

//      {/* <Counter/> */}

//      {/* <Form/> */}
//      <UserCard/>
//     </div>
    
//   )
// }


// export default App

import React from 'react'
import NavBar from './compenents/NavBar'
import { Route, Routes } from 'react-router-dom'
import HomePages from './pages/HomePages'
import ProductPages from './pages/ProductPages'
import CartPages from './pages/CartPages'
import SingleProductPages from './pages/SingleProductPages'
import NotFoundPages from './pages/NotFoundPages'
import ProtectedRoute from './utils/ProtectedRoute'
import LoginPages from './pages/LoginPages'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePages/>}/>
        <Route path='/products' element={<ProductPages/>}/>
    
        <Route element={<ProtectedRoute/>}>
              <Route path='/cart' element={<CartPages/>}/>
        </Route>
        <Route path='/products/:id' element={<SingleProductPages/>} />

         <Route path='/login' element={<LoginPages/>} />
       {/* error massage */}
       <Route path='*' element={<NotFoundPages/>} />
      </Routes>
    </div>
  )
}

export default App
