import React from 'react'
import '../App.css'
import { useState , useEffect } from 'react'; 
import { Link, Route , Routes , useParams } from 'react-router'

export default function Card() {

  const { MovieG } = useParams();   

  const[inputVal , setInputVal] = useState('');
  const[cities , setCities] = useState("");
  const[data,setData] = useState();
  const[data2,setData2] = useState({
          id: 0,
          windSpeed: 0,
          temperature: 0,
          country: ""
  });




  
  const inputData = async() =>{
      const api = `https://api.tvmaze.com/shows/${MovieG}`;
      const response = await fetch(api);
      const dataResponse = await response.json();
      setData(dataResponse);
      getDate(dataResponse);
  }

  useEffect(()=>{
   
    inputData();

  },[]);
  

  // function handleClick(){
  //   setCities(inputVal)
  // };
 
  const getDate = (data) => {
      setData2({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: data.main.temp,
          country: data.name
        });
  }


  return (
    <>

      <section className='bg-[url(./assets/img/bk2.jpg)] bg-no-repeat bg-cover h-screen place-content-center place-items-center '>
        <div className='bg-gray-50/10 w-[24%] shadow-xl shadow-gray-700 rounded-2xl flex flex-col backdrop-blur-md '>
          <h1 className='text-center text-2xl text-[#C8FF00] font-bold text-shadow-md text-shadow-gray-700 pt-5'> Weather </h1>
          <div className='pb-8 pt-5 flex flex-col '>

            {/* <section className='flex self-center gap-3'>
              <input onChange={(event)=>setInputVal(event.target.value)} className='bg-transparent shadow-md rounded-md h-10 pl-15 shadow-gray-700 placeholder:text-white' type="text" name="text" id="text" placeholder='Enter a City Name' />
              <section onClick={handleClick} className='bg-gray-50/10 shadow-md rounded-md h-10 px-2.5 shadow-gray-700 place-content-center '>
                <img className='flex' src={search} width={16} alt="search" />
              </section>
            </section> */}

            {/* <img className='flex place-self-center pt-10 w-[70%]'  src={cloud} alt=" weather-pic " /> */}

            <section className='flex flex-col place-items-center pt-5'>
              <div className='text-4xl font-bold text-white'> {data2.temperature}°c </div>
              <span className='text-white text-sm'> {data2.country} </span>
            </section>


            <section className='flex gap-10 place-content-center pt-10'>

              <div className='flex gap-4'>
                {/* <img src={humidity} className='aspect-square h-[50%] w-[30%]' alt="hum" /> */}
                <section className='flex flex-col'>
                  <span className=' text-xl text-white'> {data2.humidity}% </span>
                  <span className='text-sm text-white'> Humidity </span>
                </section>
              </div>

              <div className='flex gap-4'> 
                {/* <img src={wind} className='h-[50%] w-[30%]' alt="wind" /> */}
                <section className='flex flex-col'>
                  <span className=' text-sm text-white'> {data2.windSpeed} km </span>
                  <span className='text-sm text-white'> Wind-Speed </span>
                </section>
              </div>

            </section>


            
          </div>
        </div>
      </section>
      
    </>
  )
}
