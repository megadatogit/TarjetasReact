import icoFacebook from "../assets/icons/icoFacebook.svg"
import icoTwitter from "../assets/icons/icoTwitter.svg"
import icoInstagram from "../assets/icons/icoInstagram.svg"
import icoYoutube from "../assets/icons/icoYoutube.svg"


/* textos Tarjeta Analisis */
export const TarjetaAnalisis = {
  titulo: "Target Analysis", 
  subtitulo: "A few words about this slide", 
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut veritatis soluta explicabo nulla, voluptatibus maxime dolorum recusandae nisi, veniam cupiditate ad dicta optio iste? Nostrum beatae officia, tempora consequuntur incidunt eveniet et sint sunt delectus labore totam in, assumenda fugiat maxime velit .", 
  txta: "Generador", 
  txtb: "Manual",
  txtc: "Oportunidad",
  banderaTxt1: "Our Target", 
  banderaTxt2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi.",
}


/* textos Tarjeta Social Media */
export const TarjetaSocialMedia = {
  titulo: "Social Media",
  tit:"Folowers",
  redes:[
    {
      red:"Facebook", 
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing letra. ",
      barra:"100",
      bg:"#F3F1E5",
      icono:icoFacebook,
      seguidores:"70K",      
    },
    {
      red:"Twitter", 
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing letra. ",
      barra:"50",
      bg:"#E6E3DA",
      icono:icoTwitter,
      seguidores:"90K",
    },
    {
      red:"Instagram", 
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing letra. ",
      barra:"40",
      bg:"#c0c0b4",
      icono:icoInstagram,
      seguidores:"20K",
    },
    {
      red:"Youtube", 
      descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing letra. ",
      barra:"60",
      bg:"#818879",
      icono:icoYoutube,
      seguidores:"30K",
    },
  ],
}


/* textos Tarjeta Time planing */
export const TarjetaTimePlaning = {
  titulo:"Time Planing",
  barras: [
    {
      semanas:3,
      tarea:"Planing",
      descripcion:"Lorem ipsum dolor sit amet.",
      bg:"#F6F6F4",
    },
    {
      semanas:6,
      tarea:"Operating",
      descripcion:"Lorem ipsum dolor sit amet.",
      bg:"#F3F1E5",
    },
    {
      semanas:5,
      tarea:"Visualization",
      descripcion:"Lorem ipsum dolor sit amet.",
      bg:"#D2D0C2",
    },
    {
      semanas:4,
      tarea:"Materialization",
      descripcion:"Lorem ipsum dolor sit amet.",
      bg:"#c0c0b4",
    },
  ]
}


/* textos Tarjeta Objective */
export const TarjetaObjective = {
  titulo: "Objective",
  descripcion:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem blanditiis repellendus molestiae corrupti. Ipsam est sunt repudiandae vitae natus, dolor nulla! Reiciendis dicta quam nobis eius animi?",
  objetivos: [
    { objetivo:"Growth Business",
      detalle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque quis ratione soluta eaque.",
      bg:"#F3F1E5",
      avance:34,
      linea:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      pie:"Tv"
    },
    { objetivo:"Exposure Social Media",
      detalle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque quis ratione soluta eaque.",
      bg:"#E6E3DA",
      avance:54,
      linea:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      pie:"Social Media",
    },
    { objetivo:"Market share",
      detalle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum itaque quis ratione soluta eaque.",
      bg:"#CCCCCA",
      avance:12,
      linea:"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      pie:"Marketshare",
    },
  ],
}


/* testos Tarjeta Process */
export const TarjetaProcess = {
  fchaI:"Oct, 2022",
  fchaF:"Jan, 2023",
  titulo: "Process",
  etapas:[
    {
      accion:"Research",
      indiceUno:"Lorem ipsum dolor sit amet .",
      indiceDos:"Lorem ipsum dolor sit amet .",
      descripcion:"Lorem ipsum dolor sit amet  adipisicing elit. Temporibus voluptas corporis asperiores! ",
      bg:"#F6F6F4",
    },
    {
      accion:"Design",
      indiceUno:"Lorem ipsum dolor sit amet .",
      indiceDos:"Lorem ipsum dolor sit amet .",
      descripcion:"Lorem ipsum dolor sit amet  adipisicing elit. Temporibus voluptas corporis asperiores! ",
      bg:"#F3F1E5"
    },
    {
      accion:"Development",
      indiceUno:"Lorem ipsum dolor sit amet .",
      indiceDos:"Lorem ipsum dolor sit amet .",
      descripcion:"Lorem ipsum dolor sit amet  adipisicing elit. Temporibus voluptas corporis asperiores! ",
      bg:"#E6E3DA"
    },
    {
      accion:"Lauching",
      indiceUno:"Lorem ipsum dolor sit amet .",
      indiceDos:"Lorem ipsum dolor sit amet .",
      descripcion:"Lorem ipsum dolor sit amet  adipisicing elit. Temporibus voluptas corporis asperiores! ",
      bg:"#CCCCCA"
    },
  ]

}

/* tarjeta Results */

export const TarjetaResults = {
  titulo:"Results",
  logros: [
    {logro: "Growth", labelValor:"porcentaje", valor: "30%"},
    {logro: "Exposure", labelValor:"likes", valor: "90k"}
  ],
  descripcion:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi exercitationem quae voluptate non illo dicta blanditiis aspernatur nihil incidunt earum, consectetur deserunt.",
  label:"+ lorem",
  tolp:"Lorem ipsim dor sit",
  xAxis:["Enero","Febrero","Marzo","Abril", "Mayo"]
}

export const TarjetaMission = {
  titulo:"Mission",
  descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, quos vitae natus culpa quo officia in eius sequi deleniti quisquam quaerat commodi reiciendis, corporis sit! Ratione molestias facilis fugit placeat.",
  metas:[
    {meta:"Focusing Problems", bg:"#B0AFAF"},
    {meta:"Optimizing", bg:"#D3D2CE"},
    {meta:"Growth Business", bg:"#F0EEE8"},
  ],
}