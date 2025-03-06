import ArrivalsSwiper from "./MainSwiper/MainSwiper";
import { swiperData } from "../data.json";

const Arrivals = () => {
  return (
    <div className="mx-auto max-w-2xl px-6 lg:px-8 lg:max-w-7xl lg:px-8 text-left">
      <h2>New Arrivals</h2>
      
        <div>
          <ArrivalsSwiper products={swiperData} />
        </div>
      </div>
  )
}  

export default Arrivals;