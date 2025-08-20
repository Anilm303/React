import React from 'react'

const Card = (user) => {
  return (
    <div className='border border-slate-400 p-4 rounded-md w-fit'>
             <p>ID: {users.id}</p>
             <p>Username: {users.username}</p>
             <p>Age: {users.age}</p>
        </div>
  )
}

export default Card