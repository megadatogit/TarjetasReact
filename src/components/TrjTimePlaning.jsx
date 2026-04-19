import React from 'react'
import styles from '../styles/Tarjetas.module.css'


//pinta las semanas en la parte superior
const Semanas = ({ semanas }) => {
  const lasSemanas = Array.from({ length: semanas }, (_, i) => i + 1);
  return (
    <>
      {lasSemanas.map((item) => (
        <p className={styles.semana} key={item}>{item} weeks </p>
      ))}
    </>
  )
}


//pinta las barras y sus elementos
const Barras = ({ barra, i }) => {
  return (
    <div className={styles.barras}>
      <div key={i}>
        <div className={styles.barra} style={{ width: `calc(170px * ${barra.semanas})`, background: `${barra.bg}` }}>
          <p className={styles.tarea}>{barra.tarea}</p>
        </div>
        <div className={styles.cntDescripcion} style={{ width: `calc(174px * ${barra.semanas})` }}>
          <p className={styles.TPdescripcion}>{barra.descripcion}</p>
          <p className={styles.TPdescripcion}>{barra.descripcion}</p>
        </div>
      </div>
    </div>
  )
}


//COMPONENTE TARJETA TIME PLANING
const TrjTimePlaning = ({ titulo, barras }) => {
  //generamos la cantidad de semanas
  return (
    <div className={styles.TrjTimePlaning}>
      <div className={styles.TParriba}>
        <Semanas semanas={7} />
      </div>
      <div className={styles.TPabajo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        {barras.map((item, i) => (
          <Barras
            key={i}
            barra={item}
          />
        ))}
      </div>
    </div>
  )
}

export default TrjTimePlaning