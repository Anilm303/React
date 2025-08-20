import React from 'react'
import Card from './Card'

const UserCard = () => {

    const users = [
     { id :101, username : 'anil', age :21 },
     {id :102, username : 'ram', age :23 },
     {id :103, username : 'hari', age :41 }
    ]

    const popularUsers =[
      { id :104, username : 'anil', age :21 },
     {id :105, username : 'ram', age :23 },
     {id :106, username : 'hari', age :41 }
    ]
  return (
    <div>
      {users.map(users =>( 
        <Card key={users.id} user={user}/>
      ))}


     <h1>popularUsers</h1>
      {popularUsers.map(users =>( 
        <Card key={users.id} user={user}/>
      ))}
      
    </div>
  )
}

export default UserCard