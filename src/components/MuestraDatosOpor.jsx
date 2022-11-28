import { useNavigate } from "react-router-dom";
import "../styles/MuestraDatos.css"
import Nav from "./Nav";

function MuestraDatos(){

    const navigation = useNavigate();

    const add = e => {
        e.preventDefault();
        navigation("/CrearOportunidades");
    }

    return(
        <>
        <Nav></Nav>
        <body>
            <h1>Oportunidades</h1>
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