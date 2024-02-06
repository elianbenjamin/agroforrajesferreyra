import './App.css'
import Home from './components/Home/Home'
import { Routes, Route} from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'





function App() {


  return (
    <div className='App'>

       <Routes>
        <Route path='/home' element={<Home />}/>
       </Routes>
    
    </div>
  )
}

export default App
