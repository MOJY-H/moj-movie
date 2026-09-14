import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Routes, Route } from 'react-router';


export default function Card() {

const [movie,setMovie] = useState([]);
const[load,setLoad] = useState(true);

  const inputData = async() =>{
        const api = `https://api.jikan.moe/v4/top/anime?limit=20`;
        const response = await fetch(api);
        const dataResponse = await response.json();
        setMovie(dataResponse);
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

    <>

      <div className='flex flex-1 text-white mt-5'>
              
        <NavLink to="/Horro" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <p className='flex-3 pl-2'> Horror </p> </NavLink>

        {/* <Routes>

          <Route path="/Homepage" element={<Card />} />

          <Route path="/:genre" element={<Card />} />

        </Routes> */}
        
      </div>

      <div>
        
      </div>
      
      

    </>
  )
}


