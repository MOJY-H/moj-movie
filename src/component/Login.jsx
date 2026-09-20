import React from 'react'
import {X} from 'lucide-react'
import { NavLink } from 'react-router'

export default function Login() {
  return (
    <>
        <section className='bg-[hsl(246,36%,12%)] flex justify-center absolute w-screen h-screen top-0 left-0'>
            <div className='pt-40 flex'>
                <form className='flex flex-col w-[50%] text-center' action="/">
                    <h1 className='text-3xl pb-10'> Login </h1>
                    <label htmlFor="name " className='text-center' > Name </label>   
                    <input className='flex self-center border mt-2 mb-5 w-50 pl-3 py-2 rounded-2xl' placeholder='type here..' type="text" name="name" id="name" />
                    <label htmlFor="Lname " className='text-center' >Password</label>
                    <input className='flex self-center border mt-2 mb-5 w-50 pl-3 py-2 rounded-2xl' placeholder='type here..' type="text" name="Lname" id="Lname" />
                    <button className='pt-10 cursor-pointer' type="submit"> <span className='border p-2 rounded-2xl'>Submite</span> </button>
                </form>
                <NavLink to="/">
                    <X className='mt-2' />
                </NavLink>
            </div>
        </section>
    </>
  )
}
