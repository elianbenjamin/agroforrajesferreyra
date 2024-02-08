import './App.css'
import Home from './components/Home/Home'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
import About from './views/About/About'
import Service from './views/Service/Service'





function App() {


  return (
    <div className='App'>
       <NavBar />
       <Home/>
       <Service/>
       
    
    </div>
  )
}

export default App
