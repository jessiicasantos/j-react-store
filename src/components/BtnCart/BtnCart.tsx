import "./BtnCart.css";
import { useCart } from "../Cart/CartContext";
import React from "react";
import { CartItem } from "../../types/Cart";

const BtnCart = ({ className, product }: CartItem) => {
  const { dispatch, setIsOpen } = useCart();

  const addToCart = (e: React.FormEvent) => {
    e.preventDefault();

    const item = {
      id: product?.id,
      src: product?.src,
      alt: product?.alt,
      color: product?.color,
      accessory: product?.accessory,
      name: product?.name,
      price: parseFloat(product?.price.replace("$", "")),
      quantity: product?.quantity || 1,
    };

    dispatch({ type: "ADD_ITEM", payload: item });
    
    setIsOpen(true);
  };

  return (
    <button className={className} onClick={addToCart}>
      Add to cart
    </button>
  );
};

export default BtnCart;