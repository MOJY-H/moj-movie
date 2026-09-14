import './App.css';
import Card from './component/Card';
import { NavLink, Routes, Route } from 'react-router';
import {House , Compass , Layers2 , Bookmark , Play , ClockFading , FilePlay , Download , Headset , Settings} from 'lucide-react'
import logo from './assets/LogoMovie.PNG'

export default function App() {
  return (

    <>
      <div className='flex'>
        <section className='flex-1 h-screen flex flex-col bg-[#303042]'>

          <div className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 pt-2'>

            <img src={logo} alt="Logo" className='-mt-2 cursor-pointer max-md:mt-0' />

            <div className='flex flex-col gap-4 max-sm:gap-3 '>
              <NavLink to='/' className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <House className=' flex-1 ' /> <p className='flex-3 pl-2'> Home </p> </NavLink>
              <NavLink to="/Explore" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Compass className=' flex-1 ' /> <p className='flex-3 pl-2'> Explore </p> </NavLink>
              <NavLink to="/Genres" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Layers2 className=' flex-1 ' /> <p className='flex-3 pl-2'> Genres </p> </NavLink>
              <NavLink to="/Favourite" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Bookmark className=' flex-1 ' /> <p className='flex-3 pl-2'> Favourites </p> </NavLink>
            </div>

            <hr className='text-amber-50/20 -mr-3' />

            <div className='flex flex-col gap-4 max-sm:gap-3'>
              <NavLink to="/CountinueWatch" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Play className=' flex-1 ' /> <p className='flex-3 pl-2'> Countinue Watching </p>  </NavLink>
              <NavLink to="/RecentAdd" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <ClockFading className=' flex-1 ' /> <p className='flex-3 pl-2'> Recent Added </p> </NavLink>
              <NavLink to="/Colloction" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <FilePlay className=' flex-1 ' /> <p className='flex-3 pl-2'> My Collections </p>  </NavLink>
              <NavLink to="/Downloads" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Download className=' flex-1 ' /> <p className='flex-3 pl-2'> Downloads </p> </NavLink>
            </div>

            <hr className='text-amber-50/20 -mr-3' />

            <div className='flex flex-col gap-4 max-sm:gap-3'>
              <NavLink to="/Support" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Headset className=' flex-1 ' /> <p className='flex-3 pl-2'> Support </p> </NavLink>
              <NavLink to="/Setting" className={({isActive})=> isActive ? 'flex place-items-center place-content-start' : 'flex place-items-center place-content-start text-white/20' }> <Settings className=' flex-1 ' /> <p className='flex-3 pl-2'> Settings </p> </NavLink>
            </div>

            <Routes>

              <Route path="/Homepage" element={<Card />} />

              <Route path="/:genre" element={<Card />} />

            </Routes>

          </div>

        </section>


        <section className='flex-4 flex flex-col  bg-[#151328]'>    
          
          <div className='flex-1 bg-amber-950'>

            

          </div>

          
          <Card  />
          

        </section>


      </div>



      {/* <section className='flex'>

        <div className='bg-gray-300'>
          asafafsaafafafasf
        </div>

        <nav className="flex gap-3">
          <NavLink to="/Homepage">Home</NavLink>
          <NavLink to="/Anime">Anime</NavLink>
          <NavLink to="/Horror">Horror</NavLink>
        </nav>
        
      </section> */}


      


      


      


    </>  
  );
}


