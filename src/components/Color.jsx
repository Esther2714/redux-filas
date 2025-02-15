import { useDispatch} from "react-redux";
import {
    setColor, COLORS
} from "../redux/filasSlice";

function Color() {
   

    const dispatch = useDispatch()
    return (
        <div>
            <label>Color: </label>
            <select onChange={(e) => dispatch(setColor(e.target.value))}>
                {COLORS.map((col) => (
                    <option key={col.value} value={col.value}>{col.name}</option>
                ))}
            </select>
        </div>
    );
}

export default Color;
