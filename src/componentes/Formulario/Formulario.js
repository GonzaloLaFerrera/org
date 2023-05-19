import { useState } from "react"
import ListaOpciones from "../ListaOpciones"
import "./Formulario.css"
import Campo from "../Campo"
import Boton from "../Boton"

const Formulario = (props) =>  {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo} = props

    const manejarEnvio = (event) => {
        event.preventDefault()
        console.log("Manejar el envío")
        const datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({ titulo, color })
    }

    return <section className='formulario'>
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador</h2>
            <Campo 
                titulo="Nombre" 
                placeholder='Ingrese aquí el nombre' 
                required 
                value={nombre} 
                actualizarValor={actualizarNombre}
            /> 
            <Campo 
                titulo='Puesto' 
                placeholder='Ingresar aquí el puesto'
                required 
                value={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo='Foto' 
                placeholder='Ingresar enlace de foto' 
                required 
                value={foto} 
                actualizarValor={actualizarFoto}
            />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo</h2>
            <Campo 
                titulo="Título" 
                placeholder='Ingrese aquí el título' 
                required 
                value={titulo} 
                actualizarValor={actualizarTitulo}
            /> 
            <Campo 
                titulo='Color' 
                placeholder='Ingresar aquí el color'
                required 
                value={color} 
                actualizarValor={actualizarColor}
                type="color"
            />

            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario