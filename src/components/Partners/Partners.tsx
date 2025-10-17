import { Link } from 'react-router-dom';
import "./Partners.css";
import { useFetch } from '../../hooks/useFetch';

interface PartnersType {
  id: number;
  src: string;
  alt: string;
  href: string;
}

const Partners = () => {
  const partnersData = useFetch<PartnersType[]>('partners');

  return (
    <div className="partners">
      <div>
        {partnersData?.map((p: PartnersType, i: number) => (
          <Link 
            key={`p-${i}`}
            to={p.href}
            target="_blank"
          >
            <img
              alt={p.alt}
              src={p.src}
              width={158}
              height={48}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Partners;