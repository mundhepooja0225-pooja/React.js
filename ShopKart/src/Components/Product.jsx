import React from 'react'
import { Link } from 'react-router-dom'


const Product = ({title, image, price, category}) => {
  return (
    <div className="card" style={{width: '300px'}}>
        <img className="card-img-top" src={image} alt="card-image" />
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <p className="card-text">{category}</p>
            <Link to='/Cart' className="btn btn-primary">Add to Cart</Link>
        </div>
    </div>
  )
}

export default Product
