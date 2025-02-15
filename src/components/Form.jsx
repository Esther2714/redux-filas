import { useSelector, useDispatch } from "react-redux";
import {setSize, setNumber, añadirFila,
        selectSize, selectNumber, 
    MIN_SIZE, MAX_SIZE, MIN_NUMBER, MAX_NUMBER
} from "../redux/filasSlice";
import Color from "./Color";

function Form() {
    const dispatch = useDispatch()
    const size = useSelector(selectSize)
    const number = useSelector(selectNumber)

    return (
        <div className="form">
            <label> Size: {size} </label>
            <input 
                min={MIN_SIZE} 
                max={MAX_SIZE} 
                type="range" 
                value={size} 
                onChange= {(e)=>dispatch(setSize(e.target.value))}
            />

            <label>Number: {number} </label>
            <input 
                min={MIN_NUMBER} 
                max={MAX_NUMBER} 
                type="range" 
                value={number}
                onChange= {(e)=>dispatch(setNumber(e.target.value))}
            />
            <Color />
            <button onClick={()=>dispatch(añadirFila())}>Añadir Fila</button>
        </div>
    );
}

export default Form;
