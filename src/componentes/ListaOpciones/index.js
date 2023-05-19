import { useState } from "react"
import "./ListaOpciones.css"

const ListaOpciones = (props) => {
//Metodo map -> arreglo.map( (equipos, index) =>{           Recibe 2 argumentos el equipo y su posición
//  return <option></option>
//})
    /* const equipos = [
        "Programación",
        "Front End",
        "Data Sience",
        "Devops",
        "UX y diseño",
        "Móvil",
        "Innovación y Gestión"
    ] */ //(eliminamos la lista al refactorizar el código)

    const manejarCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key= {index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones