import React, {useState, useEffect} from "react";
import styles from "./NavBar.module.css";
import logo from "../../assets/image/300.png";
import linkedin from "../../assets/image/Linkediiiin.png";
import instagram from "../../assets/image/instagram-.png";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set a threshold value based on your design to determine when to hide/show
      const threshold = 100;

      setIsScrolled(scrollPosition > threshold);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);
  const navStyle = {
    height: isScrolled ? "100px" : "131px", 
    transition: "height 0.3s ease", 
  };

  const titleStyle = {
    transition: "transform 0.3s ease",
    transform: isScrolled ? "translateY(-31px)" : "translateY(0)",
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`} style={navStyle}>
      <div className={`${styles.containeremail} ${isScrolled ? styles.hide : ""}`}>
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
      <div className={styles.logo} style={titleStyle}>
        <div className={styles.divImg}>
          <img className={styles.logoimage} src={logo} alt="" />
        </div>
        AGROFORRAJES FERREYRA S.R.L
      </div>
      <div className={styles.menuIcon} onClick={handleMenuToggle}>
        ☰ {/* Icono de hamburguesa */}
      </div>
      <div className={`${styles.secciones} ${isMenuOpen ? styles.menuOpen : ""}`} style={titleStyle}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a className={styles.a} href="#" onClick={handleMenuToggle}>
              INICIO
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#" onClick={handleMenuToggle}>
              SERVICIOS
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#" onClick={handleMenuToggle}>
              HISTORIA
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#" onClick={handleMenuToggle}>
              GALERIA
            </a>
          </li>
          <li className={styles.li}>
            <a className={styles.a} href="#" onClick={handleMenuToggle}>
              CONTACTENOS
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


