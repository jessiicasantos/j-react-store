import "./BtnCart.css";
import { useCart } from "../Cart/CartContext";

const BtnCart = ({ className, product }: any) => {
  const { dispatch, setIsOpen } = useCart();
  
  const handleAdd = (e: any) => {
    e.preventDefault();

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity: 1 }
    });
    
    setIsOpen(true)
  };
  
  return (
    <>
      <button
        className={className}
        onClick={handleAdd}
      >
        Add to cart
      </button>
    </>
  );
};

export default BtnCart;