import React, { useEffect, useState } from 'react'
import Product from '../Components/Product'

const Products = () => {

  const [products, setProducts] = React.useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  })
  return ( 
    <div>
      {products.map(prod => (
        <Product
          title={prod.title}
          image={prod.image}
          price={prod.price}
          category={prod.category}
        />
      ))}
    </div>
  )
}

export default Products
