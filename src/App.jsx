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

export default function App() {
  return (

    <>
      <div className='flex bg-[#303042]'>

        {/* SideBar section  */}

        <section className='flex-1 h-screen flex flex-col bg-[#303042] max-sm:hidden'>

          <div className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 pt-2 '>

            <section className='flex flex-col text-white pl-3 pr-3 max-sm:text-xs max-md:text-sm max-lg:text-sm lg:text-sm gap-4 flex-1'>
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
            </section>

          </div>

          <div >
            <ScrollToTopBtn/>
          </div>

        </section>


        {/* Hero Section and movie Cards */}

        <section className=' flex flex-col flex-4  bg-[#151328] px-5 overflow-hidden'>    
          
          <div className='flex flex-col flex-1 text-white/40 gap-4 pt-6'>

            <section className='flex flex-1 gap-4 max-sm:justify-between '>

              <select className='bg-[#303042] flex-2 rounded-sm pl-2 max-sm:pr-5 max-sm:pl-3 max-sm:flex-0'>
                <option value="apple">Movie</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
              </select>  

              <input type="text" placeholder='Movies, Series, Shows' className='bg-[#303042] flex-12 rounded-sm pl-2 max-sm:hidden ' />

              <div className='bg-[#303042] place-content-center place-items-center rounded-sm px-2 py-2 '>
                <BellDot  />
              </div>

              <div className=' flex-1 max-md:hidden'>
                <img src={prof} alt="profile" className='w-10 h-10 rounded-full '/>
              </div>

            </section>

            <section className=' flex-12 mt-4'>
              <SliderHero />
            </section>

          </div>



          <section className=' flex flex-col flex-1'>

            <div className='flex text-white mb-4 mt-6 gap-4 flex-wrap'>
              
              <NavLink to="/Horror" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Horror </p> </NavLink>
              <NavLink to="/Action" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Action </p> </NavLink>
              <NavLink to="/Comedy" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Comedy </p> </NavLink>
              <NavLink to="/Drama" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Drama </p> </NavLink>
              <NavLink to="/Romance" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Romance </p> </NavLink>

              <Routes>

                <Route path="/" element={<Home />} index />

                <Route path="/:genres" element={<Card />} />
                  <Route path='/:genres/:id' element={<Single/>} />
                <Route/>

              </Routes>
              
            </div>

            <Card  />

          </section>
          

        </section>


      </div>


    </>  
  );
}


