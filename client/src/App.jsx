import './App.css'
import Home from './components/Home/Home'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import About from './views/About/About'
import Service from './views/Service/Service'
import { useState } from 'react'





function App() {
  const [state, setState] = useState(null);


  return (
    <div className='App'>
       <NavBar />
       <Home/>
       <Service/>
       <Footer/>
       
    
    </div>
  )
}

export default App
