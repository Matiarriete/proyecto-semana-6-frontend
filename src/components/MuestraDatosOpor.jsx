import { useNavigate } from "react-router-dom";
import "../styles/MuestraDatos.css"
import Nav from "./Nav";
import {useEffect, useState} from "react"

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

    const [oportunidades, setOportunidades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
            .then((response) => response.json())
            .then((data) => { 
                setOportunidades(data)
            })
    }, [])

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
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Mail</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        oportunidades.map(element => (
                            <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.mail}</td>
                                <td>{element.phoneNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default MuestraDatos;