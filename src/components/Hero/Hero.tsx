import ArrowLongRight from '../../assets/img/arrow-long-right';
import { Link } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
import "./Hero.css";

interface HeroType {
  id: number;
  subTitle: string;
  title: string;
  category: string;
  hrefText: string;
  text: string;
  customers: {
    id: number;
    src: string;
    alt: string;
  }[];
  banner: {
    id: number;
    src: string;
    alt: string;
  }[];
}

const Hero = () => {
  const heroData = useFetch<HeroType[]>('hero');

  return (
    <>
      {heroData?.map((h: HeroType, i: number) => (
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
                  {h.customers?.map((c: HeroType) => (
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
              {h.banner?.map((b: HeroType) => (
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