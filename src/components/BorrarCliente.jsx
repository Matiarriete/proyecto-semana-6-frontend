import Nav from "./Nav";
import { useEffect, useState } from "react";

function BorrarCliente(){

    const [clientes, setClientes] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/clientes")
        .then((response)=> response.json())
        .then((data) => {setClientes(data)})
    }, [])

    return(
        <>
            <Nav></Nav>
            <h1>Borrar Cliente</h1>
            <select name="Clientes" id="oporCliente"> 
                {   clientes ?
                    clientes.map(elemento=>(
                    <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                    )) :
                    <option>...</option>
                }
                </select>
            <div id="botonesEliminado">
                <button>Cancelar</button>
                <button>Aceptar</button>
            </div>
            
        </>
    )
}

export default BorrarCliente;