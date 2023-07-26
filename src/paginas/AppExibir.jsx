import React from "react";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import { FaEdit, FaTrash } from "react-icons/fa";

import "../css/AppExibir.css";

function AppExibir(){

    const navigate = useNavigate();

    let [ arrNoticia, setArrNoticia] = useState([]);

    let indice = 0;

    useEffect( () => {

        setArrNoticia( JSON.parse(localStorage.getItem("dbNoticia")));

    }, [])

    function excluirNoticia(param){
        
        const arrayNova =  arrNoticia.filter( (item) => item.titulo !== param );

        setArrNoticia(arrayNova);

        localStorage.setItem("dbNoticia", JSON.stringify(arrayNova));

    }

    function editarNoticia(param){
        
        let arrEditar = arrNoticia.filter( (item) => item.titulo === param)

        if(arrEditar){
            navigate(`/editar/${arrEditar[0].titulo}`);
        }else{
            console.log("Erro");
        }

        console.log(param);
        console.log(arrEditar);
        console.log(arrEditar[0].titulo);

    }

    return (

        <div className="divExibir">
            {arrNoticia.map( (item) => {

                return <div className="divItem" key={indice++}>{item.titulo + " - " + item.noticia} <span><FaEdit onClick={ () => editarNoticia(item.titulo) } /><FaTrash onClick={() => excluirNoticia(item.titulo)} /></span></div>

            })}
            
        </div>
    )
}

export default AppExibir;