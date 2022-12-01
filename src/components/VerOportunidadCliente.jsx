import Nav from "./Nav";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VerOportunidadCliente(){

    const [oportunidad, setOportunidad] = useState();
    const {id} = useParams();
    var modificadorBtnContactos = 0;
    // const [id, setId] = useState(this.props.id)

    useEffect(() => {
        fetch(`http://localhost:8080/obtenerId/${id}`)
        .then((response)=> response.json())
        .then((data) => {
            setOportunidad(data)
        })
    }, [])

    if (!oportunidad) {
        return(
            <>
                <h1>Loading ...</h1>
            </>
        )
    }

    function mostrarContactos(){
        if (modificadorBtnContactos === 0) {
            document.getElementsByClassName("datosContactoMustra")[0].style.display= "flex";
            ++modificadorBtnContactos
        } else {
            document.getElementsByClassName("datosContactoMustra")[0].style.display= "none";
            modificadorBtnContactos = 0;
        }
        
    }

    return(
        <>
            <Nav></Nav>
            <h1>Detalles</h1>
            <main className="mainDatos">
                <div className="datosMuestra">
                    <table>
                        <tbody>
                            {
                                <tr>
                                    <td><b>Nombre</b></td>
                                    <td>{oportunidad.name}</td>
                                </tr>
                            }
                            {
                                <tr>
                                    <td><b>Mail</b></td>
                                    <td>{oportunidad.mail}</td>
                                </tr>
                            }
                            {
                                <tr>
                                    <td><b>Numero de telefono</b></td>
                                    <td>{oportunidad.phoneNumber}</td>
                                </tr>
                            }
                            {oportunidad.client} {
                                <tr>
                                    <td><b>Clave Fiscal</b></td>
                                    <td>{oportunidad.claveFiscal}</td>
                                </tr>
                            }
                            <tr>
                                <td><b>Contactos</b></td>
                                <td><button onClick={() => mostrarContactos()}>Mostrar</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="datosMuestra datosContactoMustra">
                    <table >
                        <thead>
                            <tr>
                                <th>Tipo de Contacto</th>
                                <th>Resultado</th>
                                <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                oportunidad.contacts.map((element) => (
                                    <tr key={element.id}>
                                        <td>{element.typeContact}</td>
                                        <td>{element.result}</td>
                                        <td>{element.contactDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </main>
            
        </>
    )
}

export default VerOportunidadCliente;