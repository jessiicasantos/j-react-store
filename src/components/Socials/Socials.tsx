import { newSpeed } from "../../data.json";
import { Link } from "react-router-dom";
import "./Socials.css";

const Socials = () => {
    return (
      <div className="socials">
        {newSpeed.map((n: any, i: number) => (
          <div key={`n-${i}`}>
            <h6>{n.tag}</h6>
            <h4>
              {n.title}
            </h4>
            <p>{n.text}</p>
            <Link to={n.href} target="_blank">{n.hrefText}</Link>
            <div className="grid-cards">
              {n.imgGroup?.map((i: any) => (
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