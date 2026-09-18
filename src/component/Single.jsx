import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect  } from 'react';
import { useParams } from 'react-router';
import { NavLink, Routes, Route } from 'react-router';
import { Star } from 'lucide-react';


export default function Single() {

const [movie,setMovie] = useState([]);
const[load,setLoad] = useState(true);
const {id} = useParams();

  const inputData = async() =>{
    // const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    // const api = `https://api.themoviedb.org/8/discover/movie?api_key=${apiKey}&primary_release_date.gte=2026-01-01&primary_release_date.lte=2026-12-31`;
    const api = ` https://api.tvmaze.com/shows/${id}`;
    const response = await fetch(api);
    const dataResponse = await response.json();
    console.log(dataResponse)
    setMovie(dataResponse);
    setLoad(false);
  }

  useEffect(()=>{

    inputData();

  },[id]);

  if (load) { 
    return( <div className='flex place-content-center place-items-center text-white flex-1  '> <span> Loading ... </span> </div>)
  }


  return (
    <>
        <div>
            <section className='text-white z-1 flex flex-col px-20 max-sm:px-10 absolute top-20 h-full left-[20%] w-[80%] max-md:w-full max-md:left-0 bg-[#151328] '>

                <div className=' justify-evenly flex place-items-start gap-2 pt-15  '>

                  
                  <img src={movie.image.original} className=' aspect-2/2.5 w-[40%] rounded-lg transition-all duration-1000 hover:rounded-b-none ' alt="Poster" />
                  

                  <section className=' flex flex-col gap-2 '>

                    <h2 className=' flex '>
                        <span className=' text-md max-sm:text-lg text-5xl '>{movie.name}</span>
                    </h2>

                    <span className='text-white/40'>
                      {movie.premiered}
                    </span>
                    
                    <div className='flex text-[#D6A30C] gap-1'>
                      <Star className='w-[10%] h-[10%] self-center ' color='#D6A30C' fill='#D6A30C' /> {movie.rating.average}
                    </div>

                  </section>

                </div>

                <div>
                  <p className='text-white/80 py-12 w-full max-sm:text-sm bg-[#151328]'> {movie.summary} </p>
                </div>

            </section>
        </div>
    </>
  )
}
