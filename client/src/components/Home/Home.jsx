import { useState} from "react";
import {scroller} from "react-scroll"
import styles from "./Home.module.css";
import whatsApp from "../../assets/image/3225179_app_logo_media_popular_social_icon.png";
import arrow from "../../assets/image/arrowwhite.png"


const Home = () => {

  

  const [whatsappNumber] = useState(3329561698);

  const handleHireMeClick = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  const handleScrollToNext = () => {
    scroller.scrollTo('services', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.textAno}>- Desde 2006 -</h2>
        <hr />
        <h1 className={styles.textTitulo}>AGROFORRAJES FERREYRA</h1>
        <hr />
        <h2 className={styles.textCalidad}>Calidad Asegurada</h2>
      </div>

      <div className={styles.btnwhat}>
        <img
          onClick={handleHireMeClick}
          className={styles.img}
          src={whatsApp}
          alt=""
        />
      </div>

     

      <div className={styles.arrow}>
       
          <img onClick={handleScrollToNext} className={styles.imagen}
            src={arrow}
            alt="Flecha abajo"
           
          />
      
      </div>

    </div>
  );
};

export default Home;
