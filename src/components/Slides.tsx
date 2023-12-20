
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { register } from 'swiper/element/bundle';
register()
import { Swiper, SwiperSlide } from "swiper/react";

import imgApple from "../assets/img/portifolio/apple.png";
import imgAvegers from "../assets/img/portifolio/avegers.png";
import imgCda from "../assets/img/portifolio/cda.png";
import imgDiscover from "../assets/img/portifolio/discover.png";
import imgEstudio from "../assets/img/portifolio/estudio.png";
import imgMusic from "../assets/img/portifolio/music.png";
import imgTv from "../assets/img/portifolio/tv.png";

import { useState, useEffect } from 'react';

function Slides() {

  const [slidePerView, setSlidePerView] = useState(3)
  useEffect(() => {
    function handleResize(){
      if (window.innerWidth < 1110) {
        setSlidePerView(2);
      }else{
        setSlidePerView(3);
      }
      if (window.innerWidth < 600){
        setSlidePerView(1);
      }
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return() =>{
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  
  return (
      <div className="w-full">
        
        <div className="flex justify-center items-center mt-6 flex-col">
          <h1 className="text-4xl font-bold my-2 text-white">Portifolio</h1>
          <p className="text-base font-medium mb-5 text-zinc-500">Alguns Projetos Realizados</p>
        </div>
        
        <Swiper
          slidesPerView={slidePerView}
          pagination={{ clickable: true }}
          navigation
          className="h-[200px]"
        >
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgApple} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgAvegers} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgCda} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgDiscover} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgEstudio} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgMusic} alt="" />
          </SwiperSlide>
          <SwiperSlide className="w-full mr-2 rounded-lg overflow-hidden">
            <img className="w-full h-full" src={imgTv} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
  )
}

export default Slides
