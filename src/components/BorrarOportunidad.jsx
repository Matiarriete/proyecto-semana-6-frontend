import Nav from "./Nav";

function BorrarOportunidad(){
    return(
        <>
            <Nav></Nav>
            <h1>Borrar Oportunidad</h1>
            <select name="Oportunidades" id="oporCliente"> 
                {/*Esta parte sera cargada con los datos de las oportunidades*/}
                    <option value="Prueba">Prueba</option>
                    <option value="Prueba1">Prueba1</option>
                    <option value="Prueba2">Prueba2</option>
                    <option value="Prueba3">Prueba3</option>
                </select>
            <div id="botonesEliminado">
                <button>Cancelar</button>
                <button>Aceptar</button>
            </div>
            
        </>
    )
}

export default BorrarOportunidad;