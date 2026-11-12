import React from 'react'
import "../Styles/ShopProduct.css";
import Card from '../Components/Card';
import image1 from "../assets/image.png";
const ShopProduct = () => {
  const products =[
    {image:image1 , type:"Electronic" ,name:"AeroPulse Headphones",price:129.99 },
  ];
  return (
    <div className='shop-product'>
         
         <h1>Shop Products</h1>
         <input type="text" placeholder='Search product'  />


      <div>
        {products.map((props)=>(
          <Card image={props.image} type={props.type} name={props.name} price={props.price} />
        )

        )

        }
      </div>
       
    </div>
  )
}

export default ShopProduct;