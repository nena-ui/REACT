import React, { useEffect, useState } from 'react'

const ApiProductList = () => {
 const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://dummyjson.com/products",
    );
    const finalResponse = await response.json();
    setProducts(finalResponse.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  console.log(products)
  return (
    <div>
          <div>
      <div className="grid grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div key={index}>
            <img src={item.images[0]} alt="" />
            <h1>{item.title}</h1>
            <h1>{item.category}</h1>
            <p>{item.description}</p>
            <p>${item.price}</p>

          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default ApiProductList