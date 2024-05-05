import {UseGlobal,SwierCarrito} from "../../index";
import { motion } from 'framer-motion';
import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,EffectCube} from 'swiper/modules';
import "../../Style/TempletedCarrito.css"
import 'swiper/css';
import 'swiper/swiper-bundle.css'
import 'swiper/css/effect-cube';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const TempletedUnico = ({datos,direcciones,encargar,recoger,TipoPedido}) => {
const {abrircarrito,openelemento1,openelemento2} = UseGlobal();
const {Latitude,Longitud} = direcciones;
const transition = {type:"spring",duration:4}
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y,EffectCube]}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    effect={"cube"}
    cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      }}
    >
    {datos.map((data)=>{
      return  <SwiperSlide key={data.id}>
              <SwierCarrito 
              data={data} 
              encargar={encargar}
              abrircarrito={abrircarrito}
              openelemento1={openelemento1}
              openelemento2={openelemento2}
              direcciones={direcciones}
              recoger={recoger}
              TipoPedido={TipoPedido}
              Latitude={Latitude} Longitud={Longitud}/>
              </SwiperSlide>
    })
    }
    </Swiper>
  )
}

export default TempletedUnico