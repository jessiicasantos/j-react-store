import Arrivals from "../Arrivals/Arrivals";
import BestSeller from "../BestSeller/BestSeller";
import Hero from "../Hero/Hero";
import IconCards from "../IconCards/IconCards";
import Newsletter from "../Newsletter/Newsletter";
import Partners from "../Partners/Partners";
import Promotions from "../Promotions/Promotions";
import ShopCollection from "../ShopCollection/ShopCollection";
import Socials from "../Socials/Socials";

const Products = () => {
  return (
    <div className="products-wrapper">
      <Hero />
      <Partners />
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
