import { Link } from 'react-router-dom';
import LogoIpsum1 from '../assets/img/logoipsum-1.svg';
import LogoIpsum2 from '../assets/img/logoipsum-2.svg';
import LogoIpsum3 from '../assets/img/logoipsum-3.svg';
import LogoIpsum4 from '../assets/img/logoipsum-4.svg';
import LogoIpsum5 from '../assets/img/logoipsum-5.svg';
import LogoIpsum6 from '../assets/img/logoipsum-6.svg';

const listLogos: any = [
  {
    id: 1,
    src: LogoIpsum1,
    alt: "Logo Logoipsum azul",
    href: "https://www.lipsum.com/"
  },
  {
    id: 2,
    src: LogoIpsum2,
    alt: "Logo Logoipsum azul rosa",
    href: "https://pt.wikipedia.org/wiki/Lorem_ipsum"
  },
  {
    id: 3,
    src: LogoIpsum3,
    alt: "Logo Logoipsum preto e branco",
    href: "https://www.lipsum.com/feed/html"
  },
  {
    id: 4,
    src: LogoIpsum4,
    alt: "Logo Logoipsum multicolorida",
    href: "https://www.loremipzum.com/pt/gerador-de-texto"
  },
  {
    id: 5,
    src: LogoIpsum5,
    alt: "Logo Logoipsum verde e cinza",
    href: "https://support.microsoft.com/pt-br/topic/descri%C3%A7%C3%A3o-do-texto-lorem-ipsum-dolor-sit-amet-que-aparece-na-ajuda-do-windows-bf3b0a9e-8f6b-c2ab-edd9-41c1f9aa2ea0"
  },
  {
    id: 6,
    src: LogoIpsum6,
    alt: "Logo Logoipsum multicolorida",
    href: "https://oquequerdizer.com.br/lorem-ipsum-significado/"
  },
]

const Logos = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-20 pt-5">
      <div className="mx-auto mt-10 grid items-center justify-items-center max-w-lg grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
        {listLogos.map((list: any, i: any) => (
          <Link 
            key={`list-${i}`}
            to={list.href}
            target="_blank"
          >
            <img
              alt={list.alt}
              src={list.src}
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 max-w-[170px]"
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Logos;