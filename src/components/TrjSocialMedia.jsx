import React from 'react'
import styles from '../styles/Tarjetas.module.css'


// pinta barras de la red social
const RedSocial = ({ red, descripcion, barra, bg }) => {
  return (
    <div className={styles.RedSocial}>
      <h3 className={styles.nombre}>{red}</h3>
      <p className={styles.descripcion}>{descripcion}</p>
      <div
      className={styles.barra}
      style={{height:`calc(${barra} * 1000px / 333)`, backgroundColor:`${bg}`}}
      ></div>
    </div>
  )
}


// pinta columna de seguidores
const Seguidores = ({ icono, seguidores }) => {
  return (

    <div className={styles.data}>
      <img className={styles.icono} src={icono}></img>
      <p className={styles.ks}>{seguidores}</p>
    </div>

  )
}


//COMPONENTE TARJETA SOCIAL MEDIA
const TrjSocialMedia = ({ titulo, tit, redes }) => {
  return (
    <div className={styles.TrjSocialMedia}>
      <div className={styles.socialIzquierda}>
        <h3 className={styles.titulo}>{titulo}</h3>
        <div className={styles.cntRedes}>
        {redes.map((item, i) => (
          <RedSocial
            key={i}
            red={item.red}
            descripcion={item.descripcion}
            barra={item.barra}
            bg={item.bg}
          />
        ))}
        </div>
      </div>
      <div className={styles.socialderecha}>
        <p className={styles.tit}>{tit}</p>
        <div className={styles.seguidores}>
          {redes.map((item, i) => (
            <Seguidores
              key={i}
              icono={item.icono}
              seguidores={item.seguidores}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrjSocialMedia