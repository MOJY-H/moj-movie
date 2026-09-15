import './App.css';
import Card from './component/Card';
import { NavLink, Routes, Route } from 'react-router';
import {House , Compass , Layers2 , Bookmark , Play , ClockFading , FilePlay , Download , Headset , Settings , BellDot} from 'lucide-react'
import logo from './assets/LogoMovie.PNG'
import prof from './assets/prof.jpg'
import SliderHero from './component/SliderHero';

export default function App() {
  return (

    <>
      <div className='flex bg-[#303042]'>

        {/* SideBar section  */}

        <section className='flex-1 h-screen flex flex-col bg-[#303042] '>

          <div className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 pt-2 '>

            <img src={logo} alt="Logo" className='-mt-2 cursor-pointer max-md:mt-0 ' />

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

          </div>

        </section>


        {/* Hero Section and movie Cards */}

        <section className=' flex flex-col flex-4  bg-[#151328] px-5 overflow-hidden'>    
          
          <div className='flex flex-col flex-1 text-white/40 gap-4 pt-6'>

            <section className='flex flex-1 gap-4 max-sm:justify-between '>

              <select className='bg-[#303042] flex-3 rounded-sm pl-2 max-sm:pr-5 max-sm:pl-3 max-sm:flex-0'>
                <option value="apple">Movie</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>

              <input type="text" placeholder='Movies, Series, Shows' className='bg-[#303042] flex-12 rounded-sm pl-2 max-sm:hidden ' />

              <div className='bg-[#303042] place-content-center place-items-center rounded-sm px-2 py-2 '>
                <BellDot  />
              </div>

              <div className=' flex-1 max-md:hidden '>
                <img src={prof} alt="profile" className=' rounded-full h-full ' />
              </div>

            </section>

            <section className=' flex-12 mt-4'>
              <SliderHero />
            </section>

          </div>



          <section className=' flex flex-col flex-1'>

            <div className='flex text-white mb-4 mt-6 gap-4 '>
              
              <NavLink to="/Horro" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Horror </p> </NavLink>
              <NavLink to="/Action" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Action </p> </NavLink>
              <NavLink to="/Comedy" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Comedy </p> </NavLink>
              <NavLink to="/Drama" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Drama </p> </NavLink>
              <NavLink to="/Romance" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Romance </p> </NavLink>

              <Routes>

                <Route path="/Homepage" element={<Card />} />

                <Route path="/:genre" element={<Card />} />

              </Routes>
              
            </div>

            <h1 className='text-white text-3xl pb-4'> All Shows </h1>

            <Card  />

          </section>
          

        </section>


      </div>


    </>  
  );
}


