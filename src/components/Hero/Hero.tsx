// import { hero } from "../../data.json";
import ArrowLongRight from '../../assets/img/arrow-long-right';
import { Link } from "react-router-dom";
import "./Hero.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Hero = () => {
  const [data, setData] = useState<any>([]);

  const getHero = async () => {
    try {
      let response = await axios.get('http://localhost:5000/api/hero');

      let data = await response.data;

      setData(data);
    } catch(error) {
      console.error('Erroo!', error);
    }
  }

  useEffect(() => {
    getHero();
  }, []);

  return (
    <>
      {data?.hero?.map((h: any, i: number) => (
        <div key={`h-${i}`} className="hero-bg">
          <div className="hero">
            <div key={h.id} className="left">
              <h6>
                {h.subTitle}
              </h6>
              <h1>
                {h.title}
              </h1>
              <Link
                to={`category/${h.category}`}
                className="shopnow btn-orange"
              >
                {h.hrefText}
                <ArrowLongRight />
              </Link>
              <div className="customersCircle">
                <div className="persons">
                  {h.customers?.map((c: any) => (
                    <img key={c.id} src={c.src} alt={c.alt} />
                  ))}
                  <p>+</p>
                  <div className="txt">
                    <p>{h.text}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right">
              {h.banner?.map((b: any) => (
                <img key={b.id} src={b.src} alt={b.alt} className={b.id === 0 ? "imgTop" : b.id === 1 ? "imgBottom" : b.id === 2 ? "imgCenter" : ""} />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Hero;