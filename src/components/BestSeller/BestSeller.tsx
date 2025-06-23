import { bestSeller } from '../../data.json';
import Star from '../../assets/img/star';
import { Link } from 'react-router-dom';
  
export default function BestSeller() {
  return (
    <>
      {bestSeller.map((b: any, i: number) => (
        <div key={`b-${i}`} className="grid-four-columns">
          <h3>{b.title}</h3>

          <div>
            {b.bestSellerList?.map((s: any) => (
              <Link key={s.id} to={`products/${s.id}`}>
                <h5>HOT</h5>
                <img
                  alt={s.alt}
                  src={s.src}
                />
                <div className="rating">
                  {s?.rating.map((r: any) => (
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