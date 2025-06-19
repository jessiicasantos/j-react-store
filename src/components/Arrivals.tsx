import ArrivalsSwiper from "./MainSwiper/MainSwiper";
import { arrivals } from "../data.json";

const Arrivals = () => {
  return (
    <>
      {arrivals.map((a: any, i: number) => (
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