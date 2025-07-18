// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation.scss';
import '../../../node_modules/swiper/modules/pagination.scss';

import './styles.css';

import Heart from "../../assets/img/heart";
import Star from '../../assets/img/star';
import { Link } from 'react-router-dom';
import BtnCart from '../BtnCart/BtnCart';
import { ArrivalsSwiperProps } from '../../types/Product';

const ArrivalsSwiper: React.FC<ArrivalsSwiperProps> = ({ products }) => {

  return (
    <>
    <Swiper
      slidesPerView={4.5}
      spaceBetween={15}
      loop={true}
      grabCursor={true}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
      }}
      navigation={true}
      mousewheel={true}
      keyboard={true}
      modules={[Pagination, Navigation, Mousewheel, Keyboard]}
      breakpoints={{
        1024: {
          width: 1200,
          slidesPerView: 4.5
        },
        319: {
          width: 300,
          slidesPerView: 1.3
        }
      }}
      className="arrivalsSwiper"
    >
      {products?.map((p: any) => (
        <SwiperSlide key={p.id}>
          <Link to={`/products/${p.id}`}>
            <div className="top">
              {p.new === true ? (
                <h5>New</h5>
              ) : null}
              <img src={p.src} alt={p.alt} />

              <BtnCart 
                className="cart-btn"
                product={p}
              />
              
              <div className="like">
                <Heart fill={p.like === false ? "transparent" : "red"} />
              </div>
            </div>

            <div className="bottom">
              <div className="rating">                    
                {p?.rating.map((r: any) => (
                  <Star key={`r-${r}`} fill="yellow" stroke="gray" />
                ))}
                <h6>{p.reviews} avaliações</h6>
              </div>

              <h4>
                <span aria-hidden="true" />
                {p.name}
              </h4>
              <p>{p.price}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}

      <div className="swiper-pagination" />
    </Swiper>
    </>
  );
};

export default ArrivalsSwiper;