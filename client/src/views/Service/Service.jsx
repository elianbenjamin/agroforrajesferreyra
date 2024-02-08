
import styles from './Service.module.css'

const Service = () => {
  return (
    <div className={styles.container} id="services">
       <p className={styles.h2}>Nuestros Services</p> 
      <div className={styles.cuadroServicios}>
        <div className={styles.cuadroServicio}>
          <h4 className={styles.text}>Picado de forraje</h4>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar nunc. Morbi at lectus sed turpis digniss </p>
          <p>Aca va una foto orientativa</p>
        </div>
        <div className={styles.cuadroServicio}>
          <h4 className={styles.text}>Siembra de precision de grano grueso </h4>
          <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non pulvinar nunc. Morbi at lectus sed turpis digniss </p>
          <p>Aca va una foto orientativa</p>
        </div>
      </div>
    
    </div>
  )
}

export default Service
