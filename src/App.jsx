import './App.css';
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


