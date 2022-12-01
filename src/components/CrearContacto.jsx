import Nav from "./Nav";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CrearContactos(){

    const navigation = useNavigate();

    const [oportunidades, setOportunidades] = useState();
    const [oporCliente, setOporCliente] = useState({
        idOporCliente: -1
    });
    const [contacto, setContacto] = useState({
        typeContact: "Telefono",
        result: "",
        contactDate: ""
    });

    useEffect(() => {
        fetch("http://localhost:8080/all")
        .then((response)=> response.json())
        .then((data) => {
            setOportunidades(data)
            setOporCliente({idOporCliente: data[0].id})
        })
    }, [])

    function handleSubmit(evt){
        evt.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        fetch(`http://localhost:8080/crearContacto/${oporCliente.idOporCliente}`,{
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify({
                typeContact : contacto.typeContact,
                result: contacto.result,
                contactDate: contacto.contactDate
            })
        })
        .then(() => {
            navigation("/MuestraDatosContactos")
        })
    }

    function handleChange(evt) {

        const target = evt.target
        const name = target.name  // name será el parámetro 'name' del elemento HTML que dispare el handleChange
        const value = target.value
    
        const newContactos = {
          ...contacto,
          [name]: value,
        };
    
        setContacto(newContactos);
      }

      function handleChangeId(evt) {

        const target = evt.target
        const name = target.name  // name será el parámetro 'name' del elemento HTML que dispare el handleChange
        const value = target.value
    
        const newIdOporClient = {
          ...oporCliente,
          [name]: value,
        };
    
        setOporCliente(newIdOporClient);
      }
    
    return(
        <>
            <Nav></Nav>
            <form action="#" onSubmit={handleSubmit}>
                <select name="idOporCliente" id="oporCliente" required onChange={handleChangeId}> 
                    {   oportunidades ?
                        oportunidades.map(elemento=>(
                            <option key={elemento.id} value={elemento.id}>{elemento.name}</option>
                        )) :
                        <option>...</option>
                    }
                </select>
                <select name="typeContact" id="tipoContacto" required onChange={handleChange}> 
                {/*Esta parte sera cargada con los datos de las oportunidades*/}
                    <option value="Telefono">Telefono</option>
                    <option value="Correo">Correo</option>
                    <option value="Visita Comercial">Visita Comercial</option>
                </select>
                <textarea name="result" type="text" placeholder="Ingrese un resumen de lo hablado en el contacto" onChange={handleChange} required/>
                <label htmlFor="calendarContacto">Ingrese la fecha del contacto</label>
                <input name="contactDate" type="date" id="calendarContacto" onChange={handleChange} required/>
                <button type="submit">Enviar</button>
            </form>
        </>
    )
    
}

export default CrearContactos;