import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/image/300.png";
import linkedin from "../../assets/image/Linkediiiin.png";
import instagram from "../../assets/image/instagram-.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.containeremail}>
        <a
          href="mailto:agroforrajesferreyra@gmail.com"
          className={styles.email}
        >
          ✉️ agroforrajesferreyra@gmail.com
        </a>

        <div className={styles.divIcon}>
          <a
            className={styles.iconosRedes}
            href="https://www.linkedin.com/in/agroforrajes-ferreyra/"
            target="_blank"
            rel="noreferrer"
          >
            <img className={styles.iconosRedes} src={linkedin} alt="linkedin" />
          </a>
          <a
            className={styles.iconosRedes}
            href="https://www.instagram.com/agroforrajesferreyra/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={styles.iconosRedes}
              src={instagram}
              alt="instagram"
            />
          </a>
        </div>
      </div>
      <div className={styles.logo}>
        <div className={styles.divImg}>
          <img className={styles.logoimage} src={logo} alt="" />
        </div>
        AGROFORRAJES FERREYRA S.R.L
      </div>
      <div className={styles.secciones}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              INICIO
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              SERVICIOS
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              HISTORIA
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              GALERIA
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#">
              CONTACTENOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;




































































{
  /* <div className={styles.container}>
  <div className={styles.navLogo}>
            <NavLink to="/home"> 
            <img className={styles.img} src="https://imgs.search.brave.com/smrbS6-_vAsNTRNi2of631qBFqe1zI66Mfh_9K0sG9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mb3Jj/ZXJlcy5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvcGljYWRvMi0x/MzAweDg2Ny5qcGc" alt="" />
            </NavLink>
            <span className={styles.logoName}>Agroforrajes Ferreyra S.R.L</span>
  </div>
  <NavLink to={'/home'}>
    <button className={styles.btn}>INICIO</button>

  </NavLink>

  <NavLink to={'/service'}>
    <button className={styles.btn}>SERVICIOS</button>

  </NavLink>

  <NavLink to={'/historia'}>
    <button className={styles.btn}>HISTORIA</button>

  </NavLink>

  <NavLink to={'/galeria'}>
    <button className={styles.btn}>GALERIA</button>

  </NavLink>

  <NavLink to={'/contactanos'}>
    <button className={styles.btn}>CONTACTENOS</button>

  </NavLink>

  
</div> */
}