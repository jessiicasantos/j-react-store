import ArrivalsSwiper from "../MainSwiper/MainSwiper";
import './Arrivals.css';
import { useFetch } from "../../hooks/useFetch";

interface ArrivalsType {
  title: string;
  swiperList: [];
}

const Arrivals = () => {
  const arrivalsData = useFetch<ArrivalsType[]>('arrivals');

  return (
    <>
      {arrivalsData?.map((a: ArrivalsType, i: number) => (
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