import Nav from "./Nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearOportunidades(){

    const navigation = useNavigate();

    const [oportunidades, setOportunidades] = useState({
        contacts: null,
        isClient: false,
        name: "",
        mail: "",
        phoneNumber: "",
        isDelete: false,
        claveFiscal: "",
        delete: false,
        client: false
      });

      function handleSubmit(evt) {
        evt.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        fetch(`http://localhost:8080/oportunidades`,{
            method: "POST",
            headers:myHeaders,
            body: JSON.stringify({
                contacts: oportunidades.contacts,
                isClient: oportunidades.isClient,
                name: oportunidades.name,
                mail: oportunidades.mail,
                phoneNumber: oportunidades.phoneNumber,
                isDelete: oportunidades.isDelete,
                claveFiscal: oportunidades.claveFiscal,
            })
        }).then(() => {
            navigation("/MuestraDatosOpor")
        })
    }

      function handleChange(evt) {

        const target = evt.target
        const name = target.name  // name será el parámetro 'name' del elemento HTML que dispare el handleChange
        const value = target.value
    
        const newOportunidades = {
          ...oportunidades,
          [name]: value,
        };
    
        setOportunidades(newOportunidades);
      }

    return(
        <>
            <Nav></Nav>
            <h1>Creacion de Oportunidades</h1>
            <form action="#" onSubmit={handleSubmit}>
                <input type="text" placeholder="Ingrese el nombre" onChange={handleChange} name="name"/>
                <input type="tel" placeholder="Ingrese el telefono" onChange={handleChange} name="phoneNumber"/>
                <input type="email" placeholder="Ingrese el correo" onChange={handleChange} name="mail"/>

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