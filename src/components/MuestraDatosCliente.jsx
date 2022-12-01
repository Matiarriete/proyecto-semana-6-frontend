import "../styles/MuestraDatos.css"
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { useState, useEffect } from "react";

function MuestraDatos(){

    const navigation = useNavigate();
    const [borrado, setBorrado] = useState([]);

    function borrar(id){
        fetch(`http://localhost:8080/borrarClient/${id}`,{
            method: "POST",
        })
            .then((response) => response.json())
            .then((data) => { 
                setBorrado()
            })
    };

    function ver(id){
        navigation(`/VerOportunidadCliente/${id}`);
    }

    const add = e => {
        e.preventDefault();
        navigation("/CrearCliente");
    }

    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/clientes")
            .then((response) => response.json())
            .then((data) => { 
                setClientes(data)
            })
    }, borrado)

    return(
        <>
        <Nav></Nav>
        
            <h1>Clientes</h1>
            <div>
                <button className="buttonsMuestraDatos" onClick={add}>Agregar</button>
            </div>
            <main className="mainDatos">
                <div className="datosMuestra">
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
                                        <td><button className="buttonsMuestraDatos" onClick={() => borrar(element.id)}>Borrar</button></td>
                                        <td><button className="buttonsMuestraDatos" onClick={() => ver(element.id)}>Ver</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
        </>
    );
}

export default MuestraDatos;