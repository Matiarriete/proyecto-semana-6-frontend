import "../styles/MuestraDatos.css"
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";

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

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/clientes")
            .then((response) => response.json())
            .then((data) => { 
                console.log(data)
                setClientes(data)
            })
    }, [])

    return(
        <>
        <Nav></Nav>
        
            <h1>Clientes</h1>
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
                        <th>clave Fiscal</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map(element => (
                            <tr key={element.id}>
                                <td>{element.name}</td>
                                <td>{element.mail}</td>
                                <td>{element.phoneNumber}</td>
                                <td>{element.claveFiscal}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default MuestraDatos;