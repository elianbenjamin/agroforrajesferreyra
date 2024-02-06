import React from 'react'
import styles from './Home.module.css'




const Home = () => {
  return (
    <div className={styles.container}
    
    style={{
      background: `url(https://imgs.search.brave.com/smrbS6-_vAsNTRNi2of631qBFqe1zI66Mfh_9K0sG9E/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9mb3Jj/ZXJlcy5jb20uYXIv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MDYvcGljYWRvMi0x/MzAweDg2Ny5qcGc)`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      
    }}>
      
      <div>

      <h2 className={styles.text}>- Desde 2006 -</h2>
      <hr />
      <h1 className={styles.text}>AGROFORRAJES FERREYRA</h1>
      <hr />
      <h2 className={styles.text}>Calidad Asegurada</h2>

      </div>

  
     
    
    </div>
  )
}

export default Home
