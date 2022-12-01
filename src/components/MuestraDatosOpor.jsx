import { useNavigate } from "react-router-dom";
import "../styles/MuestraDatos.css"
import Nav from "./Nav";
import {useEffect, useState} from "react"

function MuestraDatos(){

    const navigation = useNavigate();
    const [borrado, setBorrado] = useState([]);

    function borrar(id){
        fetch(`http://localhost:8080/borrarOpor/${id}`,{
            method: "POST",
        }
        )
            .then((response) => response.json())
            .then((data) => { 
                setBorrado()
            })
    }

    const add = e => {
        e.preventDefault();
        navigation("/CrearOportunidades");
    }

    function ver(id){
        navigation(`/VerOportunidadCliente/${id}`);
    }

    const [oportunidades, setOportunidades] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
            .then((response) => response.json())
            .then((data) => { 
                setOportunidades(data)
            })
    }, borrado)

    return(
        <>
        <Nav></Nav>
            <h1>Oportunidades</h1>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                oportunidades.map(element => (
                                    <tr key={element.id}>
                                        <td>{element.name}</td>
                                        <td>{element.mail}</td>
                                        <td>{element.phoneNumber}</td>
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