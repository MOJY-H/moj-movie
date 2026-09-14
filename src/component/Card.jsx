import React from 'react';
import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router';


export default function Card() {

const [movie,setMovie] = useState([]);
const[load,setLoad] = useState(true);

  const inputData = async() =>{
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const api = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&primary_release_date.gte=2026-01-01&primary_release_date.lte=2026-12-31`;
    const response = await fetch(api);
    const dataResponse = await response.json();
    console.log(dataResponse)
    setMovie(dataResponse.results);
    console.log(dataResponse);
    setLoad(false);
  }

  useEffect(()=>{

    inputData();

  },[]);

  if (load) { 
    return <div> Loading ... </div>
  }


  return (

    <div className='pt-4'>

     {movie.map((item)=>{
     return(
      <>
        <section key={item.id}  className='text-white'>
          <h2>{item.original_title}</h2>
        </section>
      </>
     )
     })}

     
      
    </div>
  )
}


