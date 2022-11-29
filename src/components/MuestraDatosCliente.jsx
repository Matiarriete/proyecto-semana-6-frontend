import "../styles/MuestraDatos.css"
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";

function MuestraDatos(){

    const navigation = useNavigate();

    const add = e => {
        e.preventDefault();
        navigation("/CrearCliente");
    }

    const borrar = e => {
        e.preventDefault();
        navigation("/BorrarCliente");
    }

    return(
        <>
        <Nav></Nav>
        <body>
            <h1>Clientes</h1>
            <div>
                <button className="buttonsMuestraDatos" onClick={add}>Agregar</button>
                <button className="buttonsMuestraDatos" onClick={borrar}>Eliminar</button>
                <button className="buttonsMuestraDatos" disabled>Modificar</button>
            </div>
            <table>
                <tr>
                    <td></td>
                </tr>
            </table>
        </body>
        </>
    );
}

export default MuestraDatos;