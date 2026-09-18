import './App.css';
import Card from './component/Card';
import { NavLink, Routes, Route } from 'react-router';
import {House , Compass , Layers2 , Bookmark , Play , ClockFading , FilePlay , Download , Headset , Settings , BellDot} from 'lucide-react'
import logo from './assets/LogoMovie.PNG'
import prof from './assets/prof.jpg'
import SliderHero from './component/SliderHero';
import ScrollToTopBtn from './component/Scroll';
import Home from './component/Home';
import Single from './component/Single';
import Layout from './component/Layout/layout';
import SideBar from './component/SideBar';
import Hero from './component/Hero';
import ShowCard from './component/ShowCard';

export default function App() {
  return (

    <>
        
      <div className=' flex bg-[#303042] h-full '>
        
        <SideBar />

        <section className=' w-[80%] max-md:w-full flex flex-col bg-[#151328] px-5 overflow-hidden '>    
          
          <Hero />

          <ShowCard />

        </section>

      </div>


    </>  
  );
}


