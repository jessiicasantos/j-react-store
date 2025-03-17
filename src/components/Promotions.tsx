import { Link } from "react-router-dom";
import RedHeadphone from "../assets/img/red-headphone.jpg";

const Promotions = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center mx-auto bg-yellow-200 text-left my-5">
        <div>
            <img src={RedHeadphone} alt="" className="w-full object-cover" />
        </div>
        <div className="p-15 h-full">
            <h6 className="text-cyan-600 font-bold uppercase">Promotion</h6>
            <h3 className="text-3xl font-semibold my-3">Hurry up! 40% OFF</h3>
            <p className="mb-3">Thousands of high tech are waiting for you</p>
            <p className="text-base">Offer expires in:</p>

            {/* TIMER */}
            
            <Link to="x" className="bg-black text-white p-3 rounded-md block mt-3 w-[30%] text-center">Shop now</Link>
        </div>
    </div>
  )
};

export default Promotions;
