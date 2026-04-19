import React from 'react'
import styles from '../styles/Tarjetas.module.css'



/* *** TARJETA 1 Tarjeta de Análisis */

const TrjAnalisis = ({ titulo, subtitulo, descripcion, banderaTxt1, banderaTxt2, txta, txtb,
  txtc, }) => {
  return (
    <div className={styles.TrjAnalisis}>
      <div className={styles.izquierda}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <p className={styles.subtitulo}>{subtitulo}</p>
        <p className={styles.descripcion}>{descripcion}</p>
      </div>
      <div className={styles.derecha}>
        <div className={styles.header}>
          <p className={styles.txt}>{txta}</p>
          <p className={styles.txt}>{txtb}</p>
          <p className={styles.txt}>{txtc}</p>
        </div>
        <div className={styles.cntCirculos}>
          <div className={styles.circulos}>
            <div className={styles.circuloGrande}></div>
            <div className={styles.circuloChico}></div>
          </div>
          <div className={styles.bandera}>
            <p className={styles.banderaSubtitulo}>{banderaTxt1}</p>
            <p className={styles.banderaDescripcion}>{banderaTxt2}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrjAnalisis