import { promotions } from "../../data.json";
import { Link } from "react-router-dom";
import Countdown from "../Countdown/Countdown";
import "./Promotions.css";

const Promotions = () => {
  return (
    <>
      {promotions.map((p: any, i: number) => (
        <div key={`p-${i}`} className="promotions">
            <div>
              <img src={p.src} alt={p.alt} />
            </div>
            <div className="right">
                <h6>{p.tag}</h6>
                <h3>{p.title}</h3>
                <p>{p.text}</p>

                {/* TIMER */}
                <Countdown />
                
                <Link to={p.href} className="btn-black">{p.hrefText}</Link>
            </div>
        </div>
      ))}    
    </>
  )
};

export default Promotions;