import { iconCards } from "../../data.json";
import "./IconCards.css";
  
const IconCards = () => {
  return (
    <div className="iconCards">
      {iconCards.map((i: any) => (
        <article key={i.id}>
          <div className="icon">
            <img alt={i.alt} src={i.src} />
          </div>
          <div>
            <h4>
              {i.title}
            </h4>
            <p>
              {i.text}
            </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default IconCards;