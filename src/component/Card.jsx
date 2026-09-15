import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router';
import { Star } from 'lucide-react';


export default function Card() {

const [movie,setMovie] = useState([]);
const[load,setLoad] = useState(true);

  const inputData = async() =>{
    // const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    // const api = `https://api.themoviedb.org/8/discover/movie?api_key=${apiKey}&primary_release_date.gte=2026-01-01&primary_release_date.lte=2026-12-31`;
    const api = `https://api.tvmaze.com/shows?page=1`;
    const response = await fetch(api);
    const dataResponse = await response.json();
    console.log(dataResponse)
    setMovie(dataResponse);
    setLoad(false);
  }

  useEffect(()=>{

    inputData();

  },[]);

  if (load) { 
    return( <div className='flex place-content-center place-items-center text-white flex-1  '> <span> Loading ... </span> </div>)
  }


  return (

    <div className='pt-2 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 gap-y-10 gap-x-4'>

     {movie.map((item)=>{
     return(
      <>
        <section key={item.id}  className='text-white flex place-items-center '>
          <div className=' flex flex-col gap-2 '>

            <div className=' flex '>
              <img src={item.image.original} className='aspect-2/3 rounded-lg ' alt="Poster" />
            </div>
      
            <h2 className=' flex  '>
              <span className='line-clamp-1 text-md '>{item.name}</span>
            </h2>

            <div className='flex gap-2 -mt-1 text-xs'>

              <span className='text-white/40 line-clamp-1'>
                {item.premiered}
              </span>

              <span className='text-white/40'>  |  </span>
              
              <div className='flex text-[#D6A30C] gap-1'>
                <Star className='w-[50%] h-[70%]' color='#D6A30C' fill='#D6A30C' /> {item.rating.average}
              </div>

            </div>

          </div>
        </section>
      </>
     )
     })}


      
    </div>
  )
}


