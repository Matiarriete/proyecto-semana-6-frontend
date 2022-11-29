import { useNavigate } from "react-router-dom";
import "../styles/MuestraDatos.css"
import Nav from "./Nav";

function MuestraDatos(){

    const navigation = useNavigate();

    const add = e => {
        e.preventDefault();
        navigation("/CrearOportunidades");
    }

    const borrar = e => {
        e.preventDefault();
        navigation("/BorrarOportunidad");
    }

    return(
        <>
        <Nav></Nav>
            <h1>Oportunidades</h1>
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
        </>
    );
}

export default MuestraDatos;