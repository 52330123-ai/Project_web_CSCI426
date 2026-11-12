import React from 'react'
import "../Styles/Card.css";
const Card = ({image , type , name , price }) => {
  return (
    <div className='card'>
        <img src={image} alt="error" />
        <p>{type}</p>
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button>Add to Cart</button>
    </div>
  )
}

export default Card;