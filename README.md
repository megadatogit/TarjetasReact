<div align="center">

![Vista previa del proyecto](./public/TarjetasEnReact.gif)

## Tarjetas React

![React](https://img.shields.io/badge/UI-React-61DAFB?style=for-the-badge&logo=react&logoColor=0B0F10)
![CSS Modules](https://img.shields.io/badge/Estilo-CSS%20Modules-264DE4?style=for-the-badge&logo=css&logoColor=white)
![Vite](https://img.shields.io/badge/Build-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

</div>

---

### 📝 Descripción
**Tarjetas React** es una interfaz visual compuesta por una serie de tarjetas editoriales e infográficas construidas con **React**. El proyecto presenta distintos bloques de información como análisis, redes sociales, planeación, objetivos y proceso, cada uno con una composición visual propia y datos renderizados desde props.

### Qué incluye
- Tarjeta de análisis con composición tipográfica y elementos circulares.
- Tarjeta de social media con barras comparativas y métricas por red.
- Tarjeta de time planing con cronograma visual por semanas.
- Tarjeta de objectives con gráfico tipo dona, línea descriptiva y bloques de detalle.
- Tarjeta de process con etapas, fechas y flujo visual horizontal.

### 📂 Estructura del Proyecto

| Archivo | Tipo | Descripción |
| --- | --- | --- |
| **`src/App.jsx`** | `React` | Punto principal donde se renderizan todas las tarjetas. |
| **`src/components/TrjAnalisis.jsx`** | `React` | Componente de la tarjeta de análisis. |
| **`src/components/TrjSocialMedia.jsx`** | `React` | Componente de métricas y barras de redes sociales. |
| **`src/components/TrjTimePlaning.jsx`** | `React` | Componente de cronograma por semanas. |
| **`src/components/TrjObjetive.jsx`** | `React` | Componente de objetivos con dona SVG y bloques informativos. |
| **`src/components/TrjProcess.jsx`** | `React` | Componente de etapas del proceso. |
| **`src/components/textos.js`** | `JavaScript` | Fuente de datos y textos que alimentan todas las tarjetas. |
| **`src/styles/Tarjetas.module.css`** | `CSS Module` | Estilos compartidos y composición visual de las tarjetas. |
| **`src/App.css`** | `CSS` | Estilos generales de la aplicación. |
| **`public/favicon.svg`** | `SVG` | Ícono del proyecto. |

### 🎨 Proceso de Diseño
Este proyecto sigue una dirección visual tipo **presentación editorial**, con enfoque en:

- **Composición:** tarjetas amplias, jerarquía clara y distribución por bloques.
- **Tipografía:** uso de serif en títulos para reforzar el tono visual.
- **Color:** paleta neutra con variaciones suaves para separar cada sección.
- **Visualización:** mezcla de barras, bloques, línea temporal y gráfico SVG.

### ⚙️ Tecnologías
- React
- Vite
- JavaScript
- CSS Modules
- SVG

### 🚀 Instalación y Uso
Si quieres ejecutar el proyecto localmente:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/megadatogit/TarjetasReact.git
   ```

2. Entra a la carpeta del proyecto:
   ```bash
   cd TarjetasReact
   ```

3. Instala las dependencias:
   ```bash
   npm install
   ```

4. Inicia el entorno de desarrollo:
   ```bash
   npm run dev
   ```

5. Para generar la versión de producción:
   ```bash
   npm run build
   ```

### 🧩 Personalización
Si quieres adaptar el contenido, el punto más directo es editar:

- **`src/components/textos.js`** para cambiar títulos, descripciones, métricas y etapas.
- **`src/styles/Tarjetas.module.css`** para ajustar layout, colores y proporciones.

### 📌 Notas
- El proyecto usa datos estáticos.
- La interfaz está pensada como showcase visual de componentes.
- La maquetación actual prioriza una composición de formato ancho tipo slide.
