import "../styles/Nav.css"
import { useNavigate } from "react-router-dom";



function Nav(){

    const navigation = useNavigate();

    const home = e => {
        e.preventDefault();
        navigation("/");
    }
    const muestraDatosOpor = e => {
        e.preventDefault();
        navigation("/MuestraDatosOpor");
    }
    const muestraDatosCliente = e => {
        e.preventDefault();
        navigation("/MuestraDatosCliente");
    }
    const muestraDatosContactos = e => {
        e.preventDefault();
        navigation("/MuestraDatosContactos");
    }

    return(
        <>
            <header>
                <nav>
                    <ul id="listNav">
                        <li className="elementosNav">
                            <button onClick={home}>Home</button>
                        </li>
                        <li className="elementosNav">
                            <button onClick={muestraDatosOpor}>Oportunidades</button>
                        </li>
                        <li className="elementosNav">
                            <button onClick={muestraDatosCliente}>Clientes</button>
                        </li>
                        <li className="elementosNav">
                            <button onClick={muestraDatosContactos}>Contactos</button>
                        </li>
                        <li className="elementosNav">Calendar</li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;