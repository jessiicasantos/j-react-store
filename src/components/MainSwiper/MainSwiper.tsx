// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation.scss';
import '../../../node_modules/swiper/modules/pagination.scss';

import './styles.css';

import Heart from "../../assets/img/heart.svg";
import Star from '../../assets/img/star';
import { Link } from 'react-router-dom';

const ArrivalsSwiper = ({ products }: any) => {
  return (
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
      {products?.map((product: any) => (
        <SwiperSlide key={product.id} className="flex flex-col bg-gray-200">
            <Link to={product.href}>
              <div className="relative">
                <h5 className="absolute top-[10px] left-[10px] bg-white rounded-full text-sm text-black font-bold p-2 drop-shadow-xl">NEW</h5>
                <img src={product.imageSrc} alt={product.imageAlt} className="aspect-square w-full rounded-md object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                <button className="absolute bottom-[10px] left-1/2 transform -translate-x-1/2 bg-[#000] p-2 w-[90%] rounded-lg text-white text-sm">Add to cart</button>
                
                <div className="absolute top-[10px] right-[10px] bg-white rounded-full p-1 drop-shadow-xl">
                  <img src={Heart} alt="" width={20} height={20} />
                </div>
              </div>

              <div className="p-5 text-left text-black">
                <div className="flex items-center">                    
                  {product?.rating.map((r: any) => (
                    <Star key={`r-${r}`} fill="yellow" stroke="gray" className="w-[20px] h-[20px]" />
                  ))}
                  <h6 className="text-sm text-black ml-2">{product.reviews} avaliações</h6>
                </div>

                <h3 className="text-sm">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </h3>
                <p className="text-sm font-medium">{product.price}</p>
              </div>
            </Link>
          </SwiperSlide>
      ))}

      <div className="swiper-pagination" />
    </Swiper>
  );
};

export default ArrivalsSwiper;