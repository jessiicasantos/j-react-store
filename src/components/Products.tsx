import Arrivals from "./Arrivals";
import BestSeller from "./BestSeller";
import Hero from "./Hero/Hero";
import IconCards from "./IconCards";
import Logos from "./Logos";
import Newsletter from "./Newsletter";
import Promotions from "./Promotions";
import ShopCollection from "./ShopCollection";
import Socials from "./Socials";

const Products = () => {
  return (
    <div className="mx-auto">
        <Hero />
        <Logos />
        <Arrivals />
        <ShopCollection />
        <BestSeller />
        <Promotions />
        <IconCards />
        <Socials />
        <Newsletter />
    </div>
  )
};

export default Products;
