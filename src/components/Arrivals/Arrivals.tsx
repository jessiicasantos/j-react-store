import ArrivalsSwiper from "../MainSwiper/MainSwiper";
import { arrivals } from "../../data.json";
import './Arrivals.css';
import { Product } from "../../types/Product";

const Arrivals = () => {
  return (
    <>
      {arrivals.map((a: Product, i: number) => (
        <div key={`a-${i}`} className="arrivals">
          <h3>{a.title}</h3>
          
            <div>
              <ArrivalsSwiper products={a.swiperList} />
            </div>
        </div>
      ))}
    </>
  )
}  

export default Arrivals;