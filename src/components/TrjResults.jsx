import React from 'react'
import styles from '../styles/Tarjetas.module.css'

//pinta logros
const Logros = ({ logros }) => {
  return (

    <li className={styles.rsli}>
      <div className={styles.rscnt}>
        <h3 className={styles.rslogro}>{logros.logro}</h3>
        <div className={styles.rscntValor}>
          <p className={styles.rslabelValor}>{logros.labelValor}:</p>
          <p className={styles.rsvalor}>{logros.valor}</p>
        </div>
      </div>
    </li>


  )
}

//pinta Grafica
const Grafica = ({ tolp,}) => {

  return (
    <svg
      viewBox="0 0 1100 310"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%", height: "100%",
      }}>
      {/* textos de labels y tolp */}
      
      <text x="310" y="60" fontWeight="bold" fontSize="18">
        {tolp}
      </text>
      <text x="930" y="40" fontWeight="bold" fontSize="18">
        {tolp}
      </text>

      {/* áreas de gráfica */}
      <polyline points="0,270 0,206 324,83 1094,270 1094,60 1094,270" fill="#F4F3F3" stroke="none" />
      <polyline points="0,270 324,195 595,176 865,138 1094,60 1094,270" fill="#e1dad3" stroke="none" />

      <circle 
        cx="324"
        cy="83"
        r="4.5"
      />
      <circle 
        cx="1093"
        cy="60"
        r="4.5"
      />
    </svg>
  )
}

// pinta los labels en Xaxis
const LabelsX =({item}) => {
  return(
    <p className={styles.labelX}>{item}</p>
  )
}



const TrjResults = ({ titulo, descripcion, logros, label, tolp, xAxis  }) => {
  return (
    <div className={styles.TrjResults}>
      <div className={styles.rsarriba}>
        <div className={styles.rsizquierda}>
          <h3 className={styles.rstitulo}>{titulo}</h3>
          <p className={styles.rsdescripcion}>{descripcion}</p>
        </div>
        <ol className={styles.rsol}>
          {logros.map((lgitem, i) => (
            <Logros
              key={i}
              logros={lgitem}
            />
          ))}
        </ol>
      </div>
      <div className={styles.rsabajo}>
        <div className={styles.rscabeza}><p>{label}</p> <p>{label}</p></div>
      </div>
      <div className={styles.rsgrafica}>
        <Grafica
          label={label}
          tolp={tolp}
        />
      <div className={styles.xAxis}>
        {xAxis.map((item, i) => 
          (<LabelsX
          key={i} 
          item={item}
          />)
        )}
      </div>
      </div>
      

    </div>
  )
}

export default TrjResults