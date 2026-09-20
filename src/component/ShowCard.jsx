import React from 'react'
import { NavLink, Routes, Route } from 'react-router';
import Card from './Card';
import Home from './Home';
import Single from './Single';

export default function ShowCard() {
  return (
    <section className=' flex flex-col flex-1'>

        <div className='flex text-white mb-4 mt-6 gap-4 flex-wrap'>
            
            <NavLink to="/Horror" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Horror </p> </NavLink>
            <NavLink to="/Action" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Action </p> </NavLink>
            <NavLink to="/Comedy" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Comedy </p> </NavLink>
            <NavLink to="/Drama" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Drama </p> </NavLink>
            <NavLink to="/Romance" className={({isActive})=> isActive ? 'flex place-items-center place-content-start text-black bg-white rounded-3xl ' : 'flex place-items-center place-content-start bg-[#303042] rounded-3xl '  }> <p className='flex-3 px-3.5 py-1'> Romance </p> </NavLink>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/:genres" element={<Card />} />
                
                <Route path='/:genres/:id' element={<Single/>} />

            </Routes>
            
        </div>

        <Card  />

    </section>
  )
}
