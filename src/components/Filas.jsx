import { useSelector } from "react-redux";
import {selectNumFilas, selectSuperado, MAX_WIDTH
} from "../redux/filasSlice";
import Fila from "./Fila";
import '../App.css'


function Filas() {

    //No encuentro la forma de que no se renderize cada vez todo el componente filas
    //y no solo la fila que cambia 
    const numFilas = useSelector(selectNumFilas)
    //const filasLength = useSelector(state => selectFilas(state).length);


    const superado = useSelector(selectSuperado)
    return (
        <>
        <div className="filas">
             {Array.from({ length: numFilas }, (_, index) => (
                <Fila key={index} index={index} /> //no vale solo con key porque es algo interno de react, no se puede acceder a key desde Fila.jsx
            ))}
        </div>
        {superado && <p>No puedes sobrepasar el límite de {MAX_WIDTH}px de ancho </p>}

        </>
    );
}

export default Filas;
