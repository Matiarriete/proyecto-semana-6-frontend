import Nav from "./Nav";
import "../styles/Crear.css"

function CrearCliente(){
    return(
        <>
            <Nav></Nav>
            <h1>Creacion de Clientes</h1>
            <form action="#">
                <select name="Oportunidades" id="oporCliente"> 
                {/*Esta parte sera cargada con los datos de las oportunidades*/}
                    <option value="Prueba">Prueba</option>
                    <option value="Prueba1">Prueba1</option>
                    <option value="Prueba2">Prueba2</option>
                    <option value="Prueba3">Prueba3</option>
                </select>
                <input type="text" placeholder="Ingrese la Clave Fiscal"/>
                <button>Crear</button>
            </form>
        </>
    );
}

export default CrearCliente;