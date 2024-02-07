import { useState} from "react";
import {scroller} from "react-scroll"
import styles from "./Home.module.css";
import whatsApp from "../../assets/image/3225179_app_logo_media_popular_social_icon.png";
import arrow from "../../assets/image/arrooow.png"
import Service from "../../views/Service/Service";

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
        <h2 className={styles.text}>- Desde 2006 -</h2>
        <hr />
        <h1 className={styles.text}>AGROFORRAJES FERREYRA</h1>
        <hr />
        <h2 className={styles.text}>Calidad Asegurada</h2>
      </div>

      <div className={styles.btnwhat}>
        <img
          onClick={handleHireMeClick}
          className={styles.img}
          src={whatsApp}
          alt=""
        />
      </div>

      <div>
        <button onClick={handleScrollToNext}>
          <img
            src={arrow}
            alt="Flecha abajo"
            style={{ width: "40px", height: "40px" }}
          />
        </button>

      </div>
     


    </div>
  );
};

export default Home;
