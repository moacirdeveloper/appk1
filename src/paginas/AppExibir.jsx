import React from "react";
import { useState, useEffect} from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

import "../css/AppExibir.css";

function AppExibir(){

    let [ arrNoticia, setArrNoticia] = useState([]);

    let indice = 0;

    useEffect( () => {

        setArrNoticia( JSON.parse(localStorage.getItem("dbNoticia")));

    }, [])

    return (

        <div className="divExibir">
            {arrNoticia.map( (item) => {

                return <div className="divItem" key={indice++}>{item.titulo + " - " + item.noticia} <span><FaEdit /><FaTrash /></span></div>

            })}
            
        </div>
    )
}

export default AppExibir;