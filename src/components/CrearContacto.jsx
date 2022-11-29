import Nav from "./Nav";
import { useEffect, useState } from "react";

function CrearContactos(){

    const [oportunidades, setOportunidades] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
        .then((response)=> response.json())
        .then((data) => {setOportunidades(data)})
    }, [])

    
    return(
        <>
            <Nav></Nav>
            <form action="#">
                <select name="Oportunidades" id="oporCliente" required> 
                    {   oportunidades ?
                        oportunidades.map(elemento=>(
                            <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                        )) :
                        <option>...</option>
                    }
                </select>
                <select name="tipo" id="tipoContacto" required> 
                {/*Esta parte sera cargada con los datos de las oportunidades*/}
                    <option value="Telefono">Telefono</option>
                    <option value="Correo">Correo</option>
                    <option value="Visita Comercial">Visita Comercial</option>
                </select>
                <textarea type="text" placeholder="Ingrese un resumen de lo hablado en el contacto"/>
                <label htmlFor="calendarContacto">Ingrese la fecha del contacto</label>
                <input type="date" id="calendarContacto"/>
                <button>Enviar</button>
            </form>
        </>
    )
    
}

export default CrearContactos;