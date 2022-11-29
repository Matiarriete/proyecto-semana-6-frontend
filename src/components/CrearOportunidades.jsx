import Nav from "./Nav";

function CrearOportunidades(){
    return(
        <>
            <Nav></Nav>
            <h1>Creacion de Oportunidades</h1>
            <form action="#">
                <input type="text" placeholder="Ingrese el nombre"/>
                <input type="tel" placeholder="Ingrese el telefono"/>
                <input type="email" placeholder="Ingrese el correo"/>
                {/* <div>
                    <input type="checkbox" id="checkboxInput"/>
                    <label htmlFor="checkboxInput">Ha tenido contacto con esta oportunidad</label>
                </div> */}
                
                <button>Crear</button>
            </form>
        </>
    )

}

export default CrearOportunidades;