import { Link } from 'react-router-dom';
import { logos } from '../data.json';

const Logos = () => {
  return (
    <div className="partners">
      <div>
        {logos.map((l: any, i: any) => (
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

export default Logos;