import { Link } from "react-router-dom";
import "./ShopCollection.css";
import { useFetch } from "../../hooks/useFetch";

interface ShopType {
  id: number;
  title?: string;
  src: string;
  alt: string;
  category: string;
  shopCollection?: {
      id: number;
      category: string;
      src: string;
      alt: string;
  }[]
}

const ShopCollection = () => {
  const shopData = useFetch<ShopType[]>('shop');

  return (
    <>
      {shopData?.map((s: ShopType) => (
        <div key={`s-${s.id}`} className="shopCollection">
          <h3>{s.title}</h3>

          <div className="shopGrid">
            <div className="left">
              {s.shopCollection?.map((c: ShopType, i: number) => (
                <div key={`c-${i}`}>
                  {c.id == 0 &&
                    <div className="left-wrapper">
                      <img src={c.src} alt={c.alt} />
                      <Link to={`category/${c.category}`} className="btn-gray-800">
                        {c.category}
                      </Link>
                    </div>
                  }
                </div>
              ))}
            </div>
            <div className="right">
              {s.shopCollection?.map((c: ShopType, i: number) => (
                <div key={`c-${i}`}>
                  {c.id !== 0 &&
                    <div className="right-wrapper">
                      <img src={c.src} alt={c.alt} />
                      <Link to={`category/${c.category}`} className="btn-gray-800">
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