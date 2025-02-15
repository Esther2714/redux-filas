import { useDispatch, useSelector } from "react-redux";
import {
    setColor, selectColor, COLORS
} from "../redux/filasSlice";

function Color() {

    const colorSeleccionado = useSelector(selectColor);
    const dispatch = useDispatch()
    return (
        <div>
            <label>Color: </label>
            <select
                value={colorSeleccionado}
                onChange={(e) => dispatch(setColor(e.target.value))}
            >
                {COLORS.map((col) => (
                    <option key={col.value} value={col.value}>{col.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Color;
