import React from 'react'

function APICard({products}) {
    
  return (
    <>
    <div>
        <div className="h-60 flex justify-center items-center">
          <img src={products.urlToimage} al
           alt={products.name} 
           className="h-full object-cover tranition-transform duration-300 hover:scale-105 hover:opacity-90" />

        </div>
        <h2 className="text-xl font-bold mt-2">{products.description}</h2>
        <h2 className="text-xl font-bold mt-2">{products.price}</h2>
        <h2 className="text-xl font-bold mt-2">{products.stock}</h2>
        </div>
    </>
  )
}

export default APICard
