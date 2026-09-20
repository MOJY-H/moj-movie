import '../App.css';
import { NavLink, Routes, Route } from 'react-router';
import {House , Compass , Layers2 , Bookmark , Play , ClockFading , FilePlay , Download , Headset , Settings , LogIn} from 'lucide-react'
import logo from '../assets/LogoMovie.PNG'
import ScrollToTopBtn from '../component/Scroll';
import Login from './Login';


import React from 'react'

export default function SideBar() {
  return (

    <div className=' w-[20%] max-md:hidden '>

        <section className=' w-[20%] h-screen flex flex-col bg-[#303042] fixed z-10'>

        <div className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 pt-2  '>

            <section className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 flex-1 '>
                <img src={logo} alt="Logo" className='-mt-2 cursor-pointer max-md:mt-0 w-[90%] ' />

                <div className='flex flex-col gap-4 max-sm:gap-3 '>
                    <NavLink to='/' className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <House className=' flex-1 ' /> <p className='flex-3 pl-2'> Home </p> </NavLink>
                    <NavLink to="/Explore/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Compass className=' flex-1 ' /> <p className='flex-3 pl-2'> Explore </p> </NavLink>
                    <NavLink to="/Genres/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Layers2 className=' flex-1 ' /> <p className='flex-3 pl-2'> Genres </p> </NavLink>
                    <NavLink to="/Favourite/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Bookmark className=' flex-1 ' /> <p className='flex-3 pl-2'> Favourites </p> </NavLink>
                </div>

                <hr className='text-amber-50/20 -mr-3' />

                <div className='flex flex-col gap-4 max-sm:gap-3'>
                    <NavLink to="/CountinueWatch/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Play className=' flex-1 ' /> <p className='flex-3 pl-2'> Countinue Watching </p>  </NavLink>
                    <NavLink to="/RecentAdd/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <ClockFading className=' flex-1 ' /> <p className='flex-3 pl-2'> Recent Added </p> </NavLink>
                    <NavLink to="/Colloction/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <FilePlay className=' flex-1 ' /> <p className='flex-3 pl-2'> My Collections </p>  </NavLink>
                    <NavLink to="/Downloads/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Download className=' flex-1 ' /> <p className='flex-3 pl-2'> Downloads </p> </NavLink>
                </div>

                <hr className='text-amber-50/20 -mr-3' />

                <div className='flex flex-col gap-4 max-sm:gap-3'>
                    <NavLink to="/Support/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Headset className=' flex-1 ' /> <p className='flex-3 pl-2'> Support </p> </NavLink>
                    <NavLink to="/Setting/null" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <Settings className=' flex-1 ' /> <p className='flex-3 pl-2'> Settings </p> </NavLink>
                </div>

                <div className='flex flex-col gap-4 max-sm:gap-3 max-md:hidden'>
                    <NavLink to="/Login" className={({isActive})=> isActive ? 'flex place-items-center place-content-start  ' : 'flex place-items-center place-content-start text-white/50 hover:text-white/60 ' }> <LogIn className=' flex-1 ' /> <p className='flex-3 pl-2'> Login </p> </NavLink>
                    <Routes>
                        <Route path='/Login' element={<Login/>}/>
                    </Routes>
                </div>

            </section>


        </div>

        <div >
            <ScrollToTopBtn/>
        </div>


        </section>

    </div>
  )
}


    
 
