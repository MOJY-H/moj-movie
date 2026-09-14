import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import prof from '../assets/prof.jpg'
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SliderHero() {
  return (
    <>
       <section className='w-full'>
         <Swiper  spaceBetween={20} slidesPerView={1.4} navigation  modules={[Navigation,Pagination]}>
            <SwiperSlide><div className=' w-full h-75 rounded-sm bg-[url(https://thumb.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-sm bg-[url(https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail_unscaled)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-sm bg-[url(https://thumb.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
            <SwiperSlide><div className=' w-full h-75 rounded-sm bg-[url(https://thumb.wikimedia.org/wikipedia/en/thumb/4/4e/Elio_film_poster.jpg/250px-Elio_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=parser&utm_content=thumbnail)] bg-cover bg-no-repeat bg-center' ></div></SwiperSlide>
        </Swiper>
       </section>
    </>
  )
}
