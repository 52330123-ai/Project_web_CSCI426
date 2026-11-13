import React from 'react'
import "../Styles/Card.css";
const Card = ({image , category , name , price, addToCart}) => {
  return (
    <div className='card'>
        <img src={image} alt="error" />
        <p>{category}</p>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button onClick={() => addToCart({ image, category, name, price })}>Add to Cart</button>
    </div>
  )
}

export default Card;