import { useState } from "react";
import Cart from "../Cart/Cart";
import "./BtnCart.css";

const BtnCart = ({ className }: any) => {
  const [open, setOpen] = useState<any>(false);
  
  const handleOpen = (e: any) => {
    e.preventDefault();
    
    setOpen(true);
  }
  
  return (
    <>
      <button
        className={className}
        onClick={handleOpen}
      >
        Add to cart
      </button>
      
      <Cart open={open} setOpen={setOpen} />
    </>
  );
};

export default BtnCart;
