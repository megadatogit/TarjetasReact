import React from 'react'
import styles from '../styles/Tarjetas.module.css'


// pinta tarjetas a la derecha
const Objetivos = ({ objetivos }) => {
  return (
    <div className={styles.cntObjetivo} style={{ background: `${objetivos.bg}` }} >
      <p className={styles.Ovtit}>{objetivos.objetivo}</p>
      <p className={styles.Ovdetalle}>{objetivos.detalle}</p>
    </div>
  )
}


// pinta elementos de linea central
const Linea = ({ objetivos }) => {
  return (
    <li className={styles.itemLinea}>{objetivos.linea}</li>
  )
}


// pinta pie de linea
const Pie = ({ objetivos }) => {
  return (
    <div className={styles.pie}>
      <div className={styles.cuadrito} style={{ background: `${objetivos.bg}` }}></div>
      <p>{objetivos.pie}</p>
    </div>

  )
}


// pinta dona 
const Dona = ({ objetivos }) => {
  const radio = 100;
  const circunferencia = 2 * Math.PI * radio;
  let acumulado = 0;

  return (
    <svg
      viewBox="0 0 280 280"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: "280px", height: "280px" }}
    >
      {objetivos.map((obj, i) => {
        const porcentaje = obj.avance / 100;
        const longitud = porcentaje * circunferencia;

        const inicio = acumulado;
        const fin = acumulado + longitud;

        const offset = circunferencia - inicio;

        const angInicio = (inicio / circunferencia) * 2 * Math.PI;
        const angFinal = (fin / circunferencia) * 2 * Math.PI;
        const angMedio = (angInicio + angFinal) / 2;

        const cx = 140 + Math.cos(angMedio - Math.PI / 2) * (radio);
        const cy = 140 + Math.sin(angMedio - Math.PI / 2) * (radio);

        acumulado = fin;

        return (
          <g key={i}>
            <circle
              cx="140"
              cy="140"
              r={radio}
              fill="none"
              stroke={obj.bg}
              strokeWidth="38"
              strokeDasharray={`${longitud} ${circunferencia - longitud}`}
              strokeDashoffset={offset}
              strokeLinecap="butt"
              transform="rotate(-90 140 140)"
            />
            <text
              x={cx}
              y={cy}
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="10"
              fill="#333"
            >
              {obj.avance}%
            </text>
          </g>
        );
      })}
    </svg>
  );
};

//COMPONENTE TARJETA OBJECTIVE
const TrjObjetive = ({ titulo, descripcion, objetivos, }) => {
  return (
    <div className={styles.TrjObjetive}>

      <div className={styles.OvIzquierda}>

        <div className={styles.arriba}>
          <h3 className={styles.Ovtitulo}>{titulo}</h3>
          <p className={styles.Ovdescripcion}>{descripcion}</p>
        </div>

        <div className={styles.abajo}>
          <div className={styles.cntDona}>
            <Dona objetivos={objetivos} />
          </div>
          <div className={styles.cntLinea}>

            <ul className={styles.Linea}>

              {objetivos.map((ovitem, i) => (
                <Linea
                  key={i}
                  objetivos={ovitem}
                />
              ))}
            </ul>
            <div className={styles.cntPie}>
              {objetivos.map((ovitem, i) => (
                <Pie
                  key={i}
                  objetivos={ovitem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.OvDerecha}>
        {objetivos.map((ovitem, i) => (
          <Objetivos
            key={i}
            objetivos={ovitem}
          />
        ))}
      </div>
    </div>
  )
}

export default TrjObjetive