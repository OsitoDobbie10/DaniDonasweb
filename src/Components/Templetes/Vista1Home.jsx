import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay, Navigation } from 'swiper/modules';
import {ItemRestaurante} from "../../index"
import { useRef } from 'react';
const Vista1Home = ({data}) => {
  /*
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };*/
  return (
   <Swiper 
   spaceBetween={30}
   autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
   effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination,Autoplay,Navigation]}
        className="mySwiper">
       {
        data.map((slides)=>{
          return <SwiperSlide key={slides.id}>
                  <ItemRestaurante item={slides}/>
                 </SwiperSlide>
        })
       }
      
     </Swiper>)
}
const Container = styled.div`
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}

`
export default Vista1Home
