import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom';



const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navLogo}>
                <NavLink to="/home"> 
                <img className={styles.img} src="https://imgs.search.brave.com/smrbS6-_vAsNTRNi2of631qBFqe1zI66Mfh_9K0sG9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mb3Jj/ZXJlcy5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvcGljYWRvMi0x/MzAweDg2Ny5qcGc" alt="" />
                </NavLink>
                <span className={styles.logoName}>Agroforrajes Ferreyra S.R.L</span>
      </div>
      <NavLink to={'/home'}>
        <button className={styles.btn}>Inicio</button>

      </NavLink>

      <NavLink to={'/service'}>
        <button className={styles.btn}>Service</button>

      </NavLink>

      <NavLink to={'/historia'}>
        <button className={styles.btn}>Historia</button>

      </NavLink>

      <NavLink to={'/galeria'}>
        <button className={styles.btn}>Galeria</button>

      </NavLink>

      <NavLink to={'/contactanos'}>
        <button className={styles.btn}>Contactanos</button>

      </NavLink>
   
      
    </div>
  )
}

export default NavBar
