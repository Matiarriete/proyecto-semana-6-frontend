import Nav from "./Nav";
import { useEffect, useState } from "react";

function BorrarOportunidad(){

    const [oportunidades, setOportunidades] = useState();
    const [oportunidadBorrar, setOportunidadBorrar] = useState({
        id: -1
    })

    function handleSubmit(evt){
        evt.preventDefault();

        fetch(`http://localhost:8080/borrarOpor/${oportunidadBorrar.id}`,{
            method: "PUT",
        }).then(() => {
            window.location.href = window.location.href;
        })
    }

    function handleChange(evt){
        const target = evt.target;
        const name = target.name;
        const value = target.value;

        const newOportunidadBorrar = {
            ...oportunidadBorrar,
            [name] : value
        };
        setOportunidadBorrar(newOportunidadBorrar);
    }

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
        .then((response)=> response.json())
        .then((data) => {
            setOportunidades(data)
            setOportunidadBorrar({
                id: data[0]?.id
            })
        })
    }, [])

    return(
        <>
            <Nav></Nav>
            <h1>Borrar Oportunidad</h1>
            <select name="id" id="oporCliente" onChange={handleChange}> 
                { oportunidades ?
                    oportunidades.map(elemento=>(
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

export default BorrarOportunidad;