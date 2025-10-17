import { Link } from "react-router-dom";
import "./Socials.css";
import { useFetch } from "../../hooks/useFetch";

interface SocialsType {
  tag: string;
  title: string;
  text: string;
  href: string;
  svg: string;
  hrefText: string;
  imgGroup: {
    id: number;
    src: string;
    alt: string;
  }[]
}

const Socials = () => {
  const socials = useFetch<SocialsType[]>('newspeed');

  return (
    <div className="socials">
      {socials?.map((n: SocialsType, i: number) => (
        <div key={`n-${i}`}>
          <h6>{n.tag}</h6>
          <h4>
            {n.title}
          </h4>
          <p>{n.text}</p>
          <Link to={n.href} target="_blank">{n.hrefText}</Link>
          <div className="grid-cards">
            {n.imgGroup?.map((i: SocialsType) => (
              <div key={i.id}>
                <img
                  src={i.src}
                  alt={i.alt}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}  

export default Socials;