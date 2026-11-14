import React from "react";
import "../Styles/ShopProduct.css";
import Card from "../Components/Card";
import image1 from "../assets/image.png";
import wallet from "../assets/wallet.png";
import DriftEverydayBottle from "../assets/DriftEverydayBottle.png";
import Smartwatch from "../assets/Smartwatch.png";
import Velora from "../assets/Velora.png";
import { useState } from "react";
const ShopProduct = ({ addToCart }) => {
  const products = [
    {
      id: 1,
      image: image1,
      category: "Electronic",
      name: "AeroPulse Headphones",
      price: 129.99,
    },

    {
      id: 2,
      image: wallet,
      category: "Accessories",
      name: "wallet",
      price: 29.99,
    },
    {
      id: 3,
      image: DriftEverydayBottle,
      category: "Lifestyle",
      name: "DriftEverydayBottle",
      price: 29.99,
    },
    {
      id: 4,
      image: Smartwatch,
      category: "Electronic",
      name: "Smartwatch",
      price: 199.99,
    },
    {
      id: 5,
      image: Velora,
      category: "Accessories",
      name: "Velora",
      price: 19.99,
    },
  ];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Electronic", "Accessories", "Lifestyle"];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div className="shop-product">
      <h1 className="shop-title">Shop Products</h1>
      <input
        className="shop-input"
        type="text"
        placeholder="Search product..."
      />

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((Product) => (
          <div className="product-item" key={Product.id}>
            <Card
              image={Product.image}
              category={Product.category}
              name={Product.name}
              price={Product.price}
              addToCart={() => addToCart(Product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopProduct;
