import "../styles/MuestraDatos.css"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";


function MuestraDatos(){

    const navigation = useNavigate();

    const add = e => {
        e.preventDefault();
        navigation("/CrearContactos");
    }

    return(
        <>
        <Nav></Nav>
        <body>
            <h1>Contactos</h1>
            <div>
                <button className="buttonsMuestraDatos" onClick={add}>Agregar</button>
                <button className="buttonsMuestraDatos">Eliminar</button>
                <button className="buttonsMuestraDatos">Modificar</button>
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