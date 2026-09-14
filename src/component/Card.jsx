import '../App.css';
import { useState } from 'react';
import { useEffect } from 'react';

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


      <div className='flex flex-1'>


      </div>
      

    </>
  )
}


