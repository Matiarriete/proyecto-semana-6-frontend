import Nav from "./Nav";
import "../styles/Crear.css";
import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"

function CrearCliente() {

    const [oportunidades, setOportunidades] = useState();
    const navigation = useNavigate();
    const [cliente, setCliente] = useState({
        id: -1,
        claveFiscal: "",
      });

      function handleSubmit(evt) {
        evt.preventDefault();

        fetch(`http://localhost:8080/oporToClient/${cliente.id}`,{
            method: "PUT",
            body: JSON.stringify({
                claveFiscal: cliente.claveFiscal
            })
        }).then(() => {
            navigation("/MuestraDatosCliente")
        })
    }

      function handleChange(evt) {

        const target = evt.target
        const name = target.name  // name será el parámetro 'name' del elemento HTML que dispare el handleChange
        const value = target.value
    
        const newClientes = {
          ...cliente,
          [name]: value,
        };
    
        setCliente(newClientes);
      }

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
            .then((response) => response.json())
            .then((data) => { 
                setOportunidades(data)
                setCliente({
                    id: data[0].id,
                    claveFiscal: ""
                })
            })
    }, [])

    return (
        <>
            <Nav></Nav>
            <h1>Creacion de Clientes</h1>   
            <form onSubmit={handleSubmit}>
                <select name="id" id="oporCliente" onChange={handleChange}>
                    {oportunidades ?
                        oportunidades.map(elemento => (
                            <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                        )) :
                        <option>...</option>
                    }
                </select>
                <input type="text" onChange={handleChange} name="claveFiscal"/>
                <button type="submit">Ingresar</button>
            </form>
        </>
    );
}

export default CrearCliente;