import React from 'react'
import styles from '../styles/Tarjetas.module.css'


//pinta las metas con rombos
const Metas = ({metas}) => {
  return (
    <div className={styles.mscntMetas}>
      <p className={styles.msmeta}>{metas.meta}</p>
      <div className={styles.bg} style={{background:`${metas.bg}`}}></div>
    </div>
  )
}


//COMPONENTE TARJETA MISSION
const TrjMission = ({titulo, descripcion, metas}) => {
  return (
    <div className={styles.TrjMission}>
      <div className={styles.msarriba}>
        <div className={styles.msizquierda}>
          <h3 className={styles.mstitulo}>{titulo}</h3>
          <div className={styles.mscntImg}></div>
        </div>
        <div className={styles.msderecha}>
          {metas.map((msitem, i) => (
            <Metas
            key={i}
            metas={msitem}
            />
          ))}
        </div>
      </div>
      <div className={styles.msabajo}>
        <p className={styles.msdescripcion}>{descripcion}</p>
      </div>
    </div>
  )
}

export default TrjMission