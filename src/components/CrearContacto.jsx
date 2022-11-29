import Nav from "./Nav";

function CrearContactos(){
    return(
        <>
            <Nav></Nav>
            <form action="#">
                <select name="Oportunidades" id="oporCliente" required> 
                {/*Esta parte sera cargada con los datos de las oportunidades*/}
                    <option value="Prueba">Prueba</option>
                    <option value="Prueba1">Prueba1</option>
                    <option value="Prueba2">Prueba2</option>
                    <option value="Prueba3">Prueba3</option>
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