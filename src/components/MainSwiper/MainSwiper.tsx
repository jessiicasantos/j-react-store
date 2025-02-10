// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import '../../../node_modules/swiper/swiper.scss';
import '../../../node_modules/swiper/modules/navigation.scss';
import '../../../node_modules/swiper/modules/pagination.scss';

import './styles.css';

const MainSwiper = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mainSwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
    </Swiper>
  );
};

export default MainSwiper;