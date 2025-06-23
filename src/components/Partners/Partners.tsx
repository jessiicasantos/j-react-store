import { Link } from 'react-router-dom';
import { partners } from '../../data.json';
import "./Partners.css";

const Partners = () => {
  return (
    <div className="partners">
      <div>
        {partners.map((l: any, i: any) => (
          <Link 
            key={`l-${i}`}
            to={l.href}
            target="_blank"
          >
            <img
              alt={l.alt}
              src={l.src}
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