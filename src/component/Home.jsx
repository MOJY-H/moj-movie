import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect  } from 'react';
import { useParams } from 'react-router';
import { NavLink, Routes, Route } from 'react-router';
import { Star } from 'lucide-react';


export default function Home() {

const [movie,setMovie] = useState([]);
const[load,setLoad] = useState(true);
const {genres} = useParams();

  const inputData = async() =>{
    // const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    // const api = `https://api.themoviedb.org/8/discover/movie?api_key=${apiKey}&primary_release_date.gte=2026-01-01&primary_release_date.lte=2026-12-31`;
    const api = `https://api.tvmaze.com/shows?page=1`;
    const response = await fetch(api);
    const dataResponse = await response.json();
    console.log(dataResponse);
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
    <>
      <section className='flex flex-col'>
        <h1 className='text-white text-3xl pb-4 '> {genres} </h1>

        <div className='pt-2 grid grid-cols-5 max-lg:grid-cols-4 max-md:grid-cols-3 gap-y-10 gap-x-4'>

        {
        
        
        movie.map((item)=>{
          return(
          <>
            <NavLink to={`/${genres}/${item.id}`} key={item.id} className='text-white flex place-items-center hover:-translate-y-2 transition-all duration-1000 hover:shadow-lg rounded-lg hover:shadow-white/10 cursor-pointer '>
              <div className=' flex flex-col gap-2 '>

                <div className=' flex '>
                  <img src={item.image.original} className='aspect-2/3 rounded-lg transition-all duration-1000 hover:rounded-b-none ' alt="Poster" />
                </div>
          
                <h2 className=' flex px-2 '>
                  <span className='line-clamp-1 text-md '>{item.name}</span>
                </h2>

                <div className='flex gap-3 -mt-1 text-xs px-2 pb-2'>

                  <span className='text-white/40 line-clamp-1 max-sm:text-xs'>
                        {item.premiered}
                      </span>

                  <span className='text-white/40'>  |  </span>
                  
                  <div className='flex text-[#D6A30C] gap-1'>
                    <Star className='w-[50%] h-[70%]' color='#D6A30C' fill='#D6A30C' /> {item.rating.average}
                  </div>

                </div>

              </div>
            </NavLink>
          </>
        )
        })}


          
        </div>
      </section>  
    </>
  )
}


