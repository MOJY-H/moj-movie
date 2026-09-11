import './App.css';
import Card from './component/Card';
import { NavLink , Routes , Route } from 'react-router';

function App() {

  return (
    <>
      <nav className='flex gap-3'>
        <NavLink to="/home">home</NavLink> 
        <NavLink to="/Comedy">Comedy</NavLink> 
        <NavLink to="/Horror">Horror</NavLink>
      </nav>

      <Routes>
        <Route path="/:MovieG" element={<Card />} />
      </Routes>
      


    </>
  )
}

export default App
