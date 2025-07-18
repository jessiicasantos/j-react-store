import "./BtnCart.css";
import { useCart } from "../Cart/CartContext";

const BtnCart = ({ className, product }: any) => {
  const { dispatch, setIsOpen } = useCart();

  const addToCart = (e: any) => {
    e.preventDefault();

    const item = {
      id: product.id,
      src: product.src,
      alt: product.alt,
      color: product.color,
      name: product.name,
      price: parseFloat(product.price.replace("$", "")),
      quantity: product.quantity || 1,
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