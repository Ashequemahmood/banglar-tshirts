import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../TShirt/TShirt";
import Cart from "../Cart/Cart";
import './Home.css';

const Home = () => {
  const tshirts = useLoaderData();

  const [cart, setCart] = useState([]);

  const handleAddToCart = (tshirts) =>{
    const newCart = [...cart, tshirts];
    setCart(newCart);
  }

  return (
    <div className="home-container">
      <div className="t-shirt-container">
      {tshirts.map((tshirt) => (
        <TShirt
            key={tshirt._key}
            tshirt={tshirt}
            handleAddToCart={handleAddToCart}
        ></TShirt>
      ))}
      </div>
      <div className="cart-container">
            <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
