import Star from '../../assets/img/star';
import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
  
interface BestSellerList {
  id: string;
  name: string;
  src: string;
  alt: string;
  price: string | number;
  reviews: number;
  rating: number[];
}

interface BestSellerType {
  title: string;
  bestSellerList: BestSellerList[];
}

export default function BestSeller() {
  const bestSellerData = useFetch<BestSellerType[]>('bestSeller');

  return (
    <>
      {bestSellerData?.map((b: BestSellerType, i: number) => (
        <div key={`b-${i}`} className="grid-four-columns">
          <h3>{b.title}</h3>

          <div>
            {bestSellerData[0].bestSellerList?.map((s: BestSellerList) => (
              <Link key={s.id} to={`products/${s.id}`}>
                <h5>HOT</h5>
                <img
                  alt={s.alt}
                  src={s.src}
                />
                <div className="rating">
                  {s?.rating.map((r: number) => (
                    <Star key={`r-${r}`} fill="yellow" stroke="gray" />
                  ))}
                </div>
                <h4>{s.name}</h4>
                <p>{s.price}</p>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}