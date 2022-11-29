import Nav from "./Nav";
import { useEffect, useState } from "react";

function BorrarOportunidad(){

    const [oportunidades, setOportunidades] = useState();

    useEffect(() => {
        fetch("http://localhost:8080/oportunidades")
        .then((response)=> response.json())
        .then((data) => {setOportunidades(data)})
    }, [])

    return(
        <>
            <Nav></Nav>
            <h1>Borrar Oportunidad</h1>
            <select name="Oportunidades" id="oporCliente"> 
                { oportunidades ?
                    oportunidades.map(elemento=>(
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

export default BorrarOportunidad;