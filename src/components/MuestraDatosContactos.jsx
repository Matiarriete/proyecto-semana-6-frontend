import "../styles/MuestraDatos.css"
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


function MuestraDatos(){

    const navigation = useNavigate();

    const [contactos, setContactos] = useState([]);
    const [borrado, setBorrado] = useState([]);

    const add = e => {
        e.preventDefault();
        navigation("/CrearContactos");
    }

    function borrar(id){
        fetch(`http://localhost:8080/borrarClient/${id}`,{
            method: "POST",
        }
        )
            .then((response) => response.json())
            .then((data) => { 
                setBorrado()
            })
    }


    useEffect(() => {
        fetch("http://localhost:8080/contactos")
            .then((response) => response.json())
            .then((data) => { 
                setContactos(data)
            })
    }, borrado)

    return(
        <>
        <Nav></Nav>
        
            <h1>Contactos</h1>
            <div>
                <button className="buttonsMuestraDatos" onClick={add}>Agregar</button>
            </div>
            <main className="mainDatos">
                <div className="datosMuestra">
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo de Contacto</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                                <th>Nombre Oportunidad/Cliente</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contactos.map((element) => (
                                    <tr key={element.id}>
                                        <td>{element.typeContact}</td>
                                        <td>{element.result}</td>
                                        <td>{element.contactDate}</td>
                                        <td>{element.nameOporCliente}</td>
                                        <td><button className="buttonsMuestraDatos" onClick={() => borrar(element.id)}>Borrar</button></td>
                                        
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