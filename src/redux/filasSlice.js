import { createSlice } from "@reduxjs/toolkit"

// Constantes de valores mínimos y máximos
const MIN_SIZE = 20;
const MAX_SIZE = 150;
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const MAX_WIDTH = 888;
const SPACING = 5;
const COLORS = [
    { value: "red", name: "Red" },
    { value: "blue", name: "Blue" },
    { value: "green", name: "Green" },
    { value: "yellow", name: "Yellow" },
    { value: "purple", name: "Purple" }
];

function comprobarLimites(state) {
    const width = state.size * state.number + SPACING * (state.number - 1)
    return width <= MAX_WIDTH
}

function insertarFila(state){
    state.filas = [
        ...state.filas,
        {
            "size": state.size,
            "number": state.number,
            "color": state.color
        }]
        state.superado=false
        state.numFilas = state.numFilas + 1
}

export const filasSlice = createSlice({
    name: 'filas',
    initialState: {
        color: "green",
        size: 78,
        number: 6,
        filas: [], 
        numFilas:0,
        superado: false,
        colorApp: "white"
    },

    reducers: {
        setColor(state, action) {
            state.color = action.payload
        },
        setSize(state, action) {
            state.size = action.payload
        },
        setNumber(state, action) {
            state.number = action.payload
        },
        añadirFila(state) {
            if (!comprobarLimites(state)) {
                state.superado=true
                return
            }
            insertarFila(state)
        },
        setColorApp(state, action){
            state.colorApp = action.payload
        }
    },
})

//Constantes
export { MIN_SIZE, MAX_SIZE, MIN_NUMBER, MAX_NUMBER, COLORS , MAX_WIDTH};

// Selectores
export const selectColor = (state) => state.filas.color
export const selectSize = (state) => state.filas.size
export const selectNumber = (state) => state.filas.number
export const selectFilas = (state) => state.filas.filas
export const selectSuperado = (state) => state.filas.superado
export const selectNumFilas = (state) => state.filas.numFilas
export const selectColorApp = (state) => state.filas.colorApp


// Acciones exportadas
export const {
    setColor,
    setSize,
    setNumber,
    añadirFila,
    setColorApp
} = filasSlice.actions

// Exporta el reducer
export default filasSlice.reducer

