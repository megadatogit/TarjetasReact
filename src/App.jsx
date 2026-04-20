import TrjAnalisis from "./components/TrjAnalisis";
import TrjSocialMedia from "./components/TrjSocialMedia";
import TrjTimePlaning from "./components/TrjTimePlaning";
import TrjObjetive from "./components/TrjObjetive";
import TrjProcess from "./components/TrjProcess";
import TrjResults from "./components/TrjResults";
import { 
  TarjetaAnalisis, 
  TarjetaSocialMedia, 
  TarjetaTimePlaning, TarjetaObjective, 
  TarjetaProcess,
  TarjetaResults 
} from './components/textos';
import './App.css'


function App() {
  

  return (
    <div className={"body"}>
      <TrjAnalisis {...TarjetaAnalisis} />
      <TrjSocialMedia {...TarjetaSocialMedia}/>
      <TrjTimePlaning {...TarjetaTimePlaning}/>
      <TrjObjetive {...TarjetaObjective}/>
      <TrjProcess {...TarjetaProcess}  />
      <TrjResults {...TarjetaResults} />

    </div>
  )
}

export default App
