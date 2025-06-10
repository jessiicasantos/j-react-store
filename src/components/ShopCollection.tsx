import { shop } from "../data.json";
import { Link } from "react-router-dom";

const ShopCollection = () => {
  return (
    <>
      {shop.map((s: any) => (
        <div key={`s-${s.id}`} className="shopCollection">
          <h3>{s.title}</h3>

          <div className="shopGrid">
            <div className="left">
              {s.shopCollection?.map((c: any, i: number) => (
                <div key={`c-${i}`}>
                  {c.id == 0 &&
                    <div className="left-wrapper">
                      <img src={c.src} alt={c.alt} />
                      <Link to={`category/${c.category}`}>
                        {c.category}
                      </Link>
                    </div>
                  }
                </div>
              ))}
            </div>
            <div className="right">
              {s.shopCollection?.map((c: any, i: number) => (
                <div key={`c-${i}`}>
                  {c.id !== 0 &&
                    <div className="right-wrapper">
                      <img src={c.src} alt={c.alt} />
                      <Link to={`category/${c.category}`}>
                        {c.category}
                      </Link>
                    </div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShopCollection;