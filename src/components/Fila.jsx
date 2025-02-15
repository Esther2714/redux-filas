import { useSelector } from "react-redux";
import {
    selectFilas, selectSuperado
} from "../redux/filasSlice";
import '../App.css'


function Fila({ index }) {

    const fila = useSelector(state => selectFilas(state)[index]);
    const size = fila["size"]
    const color = fila["color"]
    const number = fila["number"]
    const estilo = {backgroundColor: color, width:size, height:size}

    return (
    
        <div className="fila" >
            {Array.from({ length: number }, (_, i) => (
                <div
                    className="cuadro"
                    key={i} style={estilo}>Cuadro {index}.{i}</div>
            ))}
        </div>
      
    );
}

export default Fila;
