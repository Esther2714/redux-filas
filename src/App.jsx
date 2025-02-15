
import './App.css'
import { useSelector } from "react-redux";
import Form from './components/Form'
import Filas from './components/Filas'
import { selectColorApp } from './redux/filasSlice'

function App() {
  const color = useSelector(selectColorApp)
  return (
   <div className='app' style={{backgroundColor:color}}>
    <Form />
    <Filas/> 
    </div>
  )
}

export default App
