// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation.scss';
import '../../../node_modules/swiper/modules/pagination.scss';

import './styles.css';

import Heart from '../../assets/img/heart';
import Star from '../../assets/img/star';
import { Link } from 'react-router-dom';
import BtnCart from '../BtnCart/BtnCart';
import { ArrivalsSwiperProps, SwiperProductType } from '../../types/Product';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../pages/Login/AuthContext';

const ArrivalsSwiper: React.FC<ArrivalsSwiperProps> = ({ products }) => {
  const { user } = useAuth();
  const [ likedItems, setLikedItems ] = useState<{[ id: number ]: boolean}>({});

  const toggleLike = (id: number) => {
    setLikedItems(prev => {
      const updated = { ...prev, [id]: !prev[id] };
      if (user?.id) {
        localStorage.setItem(`likes-${user.id}`, JSON.stringify(updated));
      }

      return updated;
    });

    console.log(likedItems);
  };

  useEffect(() => {
    if(user?.id && Object.keys(likedItems).length === 0) {
      const stored = localStorage.getItem(`likes-${user.id}`);
      
      if(stored) {
        setLikedItems(JSON.parse(stored));
      }
    }
  }, [user?.id])

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
      {products?.map((p: SwiperProductType) => (
        <SwiperSlide key={p.id}>
          <Link to={`/products/${p.id}`}>
            <div className="top">
              {p.new === true ? (
                <h5>New</h5>
              ) : null}
              <img src={p.src} alt={p.alt} />

              <BtnCart 
                className="cart-btn btn-gray-800"
                product={{
                  ...p,
                  color: p.color,
                  accessory: p.accessory,
                  alt: p.alt,
                  src: p.src,
                  quantity: 1
                }}
              />
              
              <button className="like" onClick={(e: React.FormEvent) => {
                  e.preventDefault(); 
                  toggleLike(p.id)
                }}
              >
                <Heart fill={likedItems[p.id] ? "red" : "transparent"} />
              </button>
            </div>

            <div className="bottom">
              <div className="rating">                    
                {p?.rating?.map((r) => (
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