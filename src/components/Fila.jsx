import { useSelector, useDispatch } from "react-redux";
import {
    selectFilas, setColorApp
} from "../redux/filasSlice";
import '../App.css'


function Fila({ index }) {

    const fila = useSelector(state => selectFilas(state)[index]);
    const size = fila["size"]
    const color = fila["color"]
    const number = fila["number"]
    const estilo = {backgroundColor: color, width:size, height:size}
    const dispatch = useDispatch()

    return (
    
        <div className="fila" >
            {Array.from({ length: number }, (_, i) => (
                <div
                    className="cuadro"
                    key={i} 
                    style={estilo}
                    onClick={() => dispatch(setColorApp(color))}>
                        Cuadro {index}.{i}
                    </div>
            ))}
        </div>
      
    );
}

export default Fila;
