import Nav from "./Nav";
import { useEffect, useState } from "react";

function BorrarCliente(){

    const [clientes, setClientes] = useState();
    const [clienteBorrar, setClienteBorrar] = useState({
        id: -1
      });

      function handleSubmit(evt) {
        evt.preventDefault();

        fetch(`http://localhost:8080/borrarClient/${clienteBorrar.id}`,{
            method: "PUT",
        }).then(() => {
            window.location.href = window.location.href;
        })
    }

      function handleChange(evt) {

        const target = evt.target
        const name = target.name  // name será el parámetro 'name' del elemento HTML que dispare el handleChange
        const value = target.value
    
        const newClienteBorrar = {
          ...clienteBorrar,
          [name]: value,
        };
        setClienteBorrar(newClienteBorrar);
      }

    useEffect(() => {
        fetch("http://localhost:8080/clientes")
        .then((response)=> response.json())
        .then((data) => {
            setClientes(data)
            setClienteBorrar({
                id: data[0]?.id
            })
        })
    }, [])

    return(
        <>
            <Nav></Nav>
            <h1>Borrar Cliente</h1>
            <select name="id" id="oporCliente" onChange={handleChange}> 
                {   clientes ?
                    clientes.map(elemento=>(
                    <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                    )) :
                    <option>...</option>
                }
                </select>
            <div id="botonesEliminado">
                <button>Cancelar</button>
                <button onClick={handleSubmit}>Aceptar</button>
            </div>
            
        </>
    )
}

export default BorrarCliente;