import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';
import Home from '../Home/Home';
import Service from '../../views/Service/Service'
import About from '../../views/About/About'
import Gallery from '../../views/Gallery/Gallery';
import Contact from '../../views/Contact/Contact'


const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}>
                <NavLink to="/home"> 
                <img className={styles.img} src="../../assets/300.png" alt="" />
                </NavLink>
                <span className={styles.logoName}>Agroforrajes Ferreyra S.R.L</span>
      </div>
      <Home/>
      <Service/>
      <About/>
      <Gallery/>
      <Contact/>
      
    </div>
  )
}

export default NavBar
