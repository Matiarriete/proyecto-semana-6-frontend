import "../styles/MuestraDatos.css"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function MuestraDatos(){

    const navigation = useNavigate();

    const add = e => {
        e.preventDefault();
        navigation("/CrearContactos");
    }

    const [contactos, setContactos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/contactos")
            .then((response) => response.json())
            .then((data) => { 
                setContactos(data)
                console.log(data)
            })
    }, [])

    return(
        <>
        <Nav></Nav>
        
            <h1>Contactos</h1>
            <div>
                <button className="buttonsMuestraDatos" onClick={add}>Agregar</button>
                <button className="buttonsMuestraDatos">Eliminar</button>
                <button className="buttonsMuestraDatos" disabled>Modificar</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tipo de Contacto</th>
                        <th>Resultado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contactos.map(element => (
                            <tr key={element.id}>
                                <td>{element.typeContact}</td>
                                <td>{element.result}</td>
                                <td>{element.contactDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default MuestraDatos;