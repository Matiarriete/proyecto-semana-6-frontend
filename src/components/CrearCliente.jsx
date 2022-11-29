import Nav from "./Nav";
import "../styles/Crear.css";
import { useEffect, useState } from "react";

function CrearCliente(){

    const [oportunidades, setOportunidades] = useState();
    const [cliente, setCliente] = useState()

    const submit = e => {
      e.preventDefault()
      fetch('http://localhost:8080/oporToClient', {
        method: 'POST',
        body: JSON.stringify({ cliente }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(res => res.json())
        .then(json => setCliente(json.cliente))
    }

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
        .then((response)=> response.json())
        .then((data) => {setOportunidades(data)})
    }, [])

    return(
        <>
            <Nav></Nav>
            <h1>Creacion de Clientes</h1>
            <form action="#">
                <select name="Oportunidades" id="oporCliente" onChange={console.log(cliente)}> 
                    { oportunidades ?
                        oportunidades.map(elemento=>(
                            <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                        )) :
                        <option>...</option>
                    }
                </select>
                <input type="text" placeholder="Ingrese la Clave Fiscal"/>
                <button>Crear</button>
            </form>
        </>
    );
}

export default CrearCliente;