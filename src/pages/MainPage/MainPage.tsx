import Arrivals from "../../components/Arrivals/Arrivals";
import BestSeller from "../../components/BestSeller/BestSeller";
import Hero from "../../components/Hero/Hero";
import IconCards from "../../components/IconCards/IconCards";
import Newsletter from "../../components/Newsletter/Newsletter";
import Partners from "../../components/Partners/Partners";
import Promotions from "../../components/Promotions/Promotions";
import ShopCollection from "../../components/ShopCollection/ShopCollection";
import Socials from "../../components/Socials/Socials";

const MainPage = () => {
  return (
    <div className="mainpage-wrapper">
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

export default MainPage;
