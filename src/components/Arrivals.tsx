import ArrivalsSwiper from "./MainSwiper/MainSwiper";
import { arrivals } from "../data.json";

const Arrivals = ({ setOpen }: any) => {
  return (
    <>
      {arrivals.map((a: any, i: number) => (
        <div key={`a-${i}`} className="arrivals">
          <h3>{a.title}</h3>
          
            <div>
              <ArrivalsSwiper setOpen={setOpen} products={a.swiperList} />
            </div>
        </div>
      ))}
    </>
  )
}  

export default Arrivals;