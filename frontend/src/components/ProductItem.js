import React from 'react'

function ProductItem({image, name, brand, price}) {
  return (
    <div className='productItem'>
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h3>{name}</h3>
        <h6>{brand}</h6>
        <p> Rs.{price} </p>
    </div>  
  )
}

export default ProductItem