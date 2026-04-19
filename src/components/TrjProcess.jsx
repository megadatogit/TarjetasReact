import React from 'react'
import styles from '../styles/Tarjetas.module.css'

//pinta etapas
const Etapas = ({ etapas }) => {
  return (
    <div className={styles.cntEtapa} style={{background: `${etapas.bg}`}}>
      <h3 className={styles.accion}>{etapas.accion}</h3>
      <ul className={styles.cntIndices}>
        <li className={styles.indices}>{etapas.indiceUno}</li>
        <li className={styles.indices}>{etapas.indiceDos}</li>
      </ul>
      <p className={styles.prdescripcion}>{etapas.descripcion}</p>
    </div>
  )
}

//COMPONENTE TARJETA PROCESS
const TrjProcess = ({ fchaI, fchaF, titulo, etapas }) => {
  return (
    <div className={styles.TrjProcess}>
      <div className={styles.prarriba}>
        <div className={styles.linea}>
          <p className={styles.fcha}>{fchaI}</p>
          <p className={styles.fcha}>{fchaF}</p>
        </div>
        <h3 className={styles.prtitulo}>{titulo}</h3>
        <div className={styles.flechita}></div>
      </div>
      <div className={styles.prabajo}>
        {etapas.map((pritem, i) => (
          <Etapas
            key={i}
            etapas={pritem}
          />
        ))
        }
      </div>
    </div>
  )
}

export default TrjProcess