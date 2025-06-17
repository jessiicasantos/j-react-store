import { useEffect, useState } from "react";
import Arrivals from "./Arrivals";
import BestSeller from "./BestSeller";
import Cart from "./Cart";
import Hero from "./Hero";
import IconCards from "./IconCards";
import Logos from "./Logos";
import Newsletter from "./Newsletter";
import Promotions from "./Promotions";
import ShopCollection from "./ShopCollection";
import Socials from "./Socials";

const Products = () => {
  const [open, setOpen] = useState<any>(false);

  const handleOpen = (e: any) => {
    e.preventDefault();
    
    setOpen(true);
  }

  return (
    <div>
        <Hero />
        <Logos />
        <Arrivals setOpen={handleOpen} />
        <ShopCollection />
        <BestSeller />
        <Promotions />
        <IconCards />
        <Socials />
        <Newsletter />
        
        <Cart open={open} setOpen={setOpen} />
    </div>
  )
};

export default Products;
