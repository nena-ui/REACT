import React from 'react'

function Card({users}) {
    
  return (
    <>
    <div>
        <div className="h-60 flex justify-center items-center">
          <img src={users.urlToimage} al
           alt={users.name} 
           className="h-full object-cover tranition-transform duration-300 hover:scale-105 hover:opacity-90" />

        </div>
        <h2 className="text-xl font-bold mt-2">{users.id}</h2>
        <h2 className="text-xl font-bold mt-2">{users.firstname}</h2>
        <h2 className="text-xl font-bold mt-2">{users.age}</h2>
        </div>
    </>
  )
}

export default Card
