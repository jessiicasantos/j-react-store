import { shop } from "../data.json";
import { Link } from "react-router-dom";

const ShopCollection = () => {
  return (
    <>
      {shop.map((s: any) => (
        <div className="shopCollection">
          <h3>{s.title}</h3>

          <div className="shopGrid">
            {s.shopCollection?.map((c: any, i: number) => (
              <>
                {c.id === 0 &&
                  <div key={`c-${i}`} className="left">
                    <img src={c.src} alt={c.alt} />
                    <Link to={c.href}>
                      {c.category}
                    </Link>
                  </div>
                }
              </>
            ))}

            <div className="right">
              {s.shopCollection?.map((c: any, i: number) => (
                <>
                  {c.id !== 0 &&
                    <div key={`c-${i}`}>
                      <img src={c.src} alt={c.alt} />
                      <Link to={c.href}>
                        {c.category}
                      </Link>
                    </div>
                  }
                </>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ShopCollection;