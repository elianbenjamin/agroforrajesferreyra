import {useState  } from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import linkedin from '../../assets/image/Linkediiiin.png'
import instagram from '../../assets/image/instagram-.png'
import whatsApp from '../../assets/image/whatsapp.png'

const Footer = () => {

  const [whatsappNumber] = useState(3329561698);

  const handleHireMeClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerH2}>
        <h2 className={styles.h2}>
          Mantengámonos en contacto <hr className={styles.hr} />
        </h2>
      </div>
      <div className={styles.comtainerSpan}>
        <p className={styles.span}>
          Estamos disponibles para responder a sus consultas. <br /> sobre
          cualquiera de nuestros servicios.
        </p>
      </div>

      <div className={styles.Ubi}>
        <p className={styles.ubicacion}>📍Villa Mercedes, San Luis.</p>
        <p className={styles.dudas}>💬Háblenos de sus dudas.</p>
        <p className={styles.contacta}>🤝🏻Contacta nuestro servicios.</p>
      </div>
      <div className={styles.redes}>
        <a href="https://www.linkedin.com/in/agroforrajes-ferreyra/" target="_blank">
           <img src={linkedin} alt="" />
        </a>
        <a href="https://www.instagram.com/agroforrajesferreyra/"  target="_blank">
          <img src={instagram} alt="" />
        </a>
        
          <img onClick={handleHireMeClick} src={whatsApp} alt="" />
       
      </div>
      <div className={styles.comunicarse}>
      <p className={styles.celular}>Contastos: </p>
      <p className={styles.celular}>Francisco Ferreyra TEL: +54 3329561698</p>
      <p className={styles.celular}>Carlos Ferreyra TEL: +54 3329629247</p>
      <p className={styles.celular}>Adrian Ferreyra TEL: +54 3329561687</p>
      <p className={styles.celular}>Fernando Ferreyra TEL: +54 3329629242</p>


      </div>

      <div className={styles.copy}>
        <p className={styles.copyyy}>Copyright © 2006-2024 Agroforrajes Ferreyra S.R.L</p>
      </div>
    </div>
  );
};

export default Footer;
