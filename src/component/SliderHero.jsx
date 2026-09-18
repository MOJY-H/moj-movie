import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import prof from '../assets/prof.jpg'
import {Autoplay , Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function SliderHero() {
  return (
    <>
       <section className='w-full'>
         <Swiper  spaceBetween={20} slidesPerView={1.4} autoplay={{delay: 3000 , disableOnInteraction: false}} loop={true}  navigation modules={[Autoplay,Navigation,Pagination]}>
            <SwiperSlide><div className=' w-full h-75 rounded-md bg-[url(https://static.tvmaze.com/uploads/images/original_untouched/1/4600.jpg)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-md bg-[url(https://static.tvmaze.com/uploads/images/original_untouched/2/5028.jpg)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-md bg-[url(https://static.tvmaze.com/uploads/images/original_untouched/316/792450.jpg)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-md bg-[url(https://static.tvmaze.com/uploads/images/original_untouched/118/295401.jpg)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
        </Swiper>
       </section>
    </>
  )
}
