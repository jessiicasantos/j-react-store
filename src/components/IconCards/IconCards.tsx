import { useFetch } from "../../hooks/useFetch";
import "./IconCards.css";

interface IconCardsType {
  id: number;
  title: string;
  src: string;
  alt: string;
  text: string;
}

const IconCards = () => {
  const iconCardsData = useFetch<IconCardsType[]>('iconCards');

  return (
    <div className="iconCards">
      {iconCardsData?.map((i: IconCardsType) => (
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