import React from "react";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/AppMenuBar.css";

function AppMenuBar(){

    let inputDado = useRef();
    let navigate = useNavigate();

    function buscaDados(){

        const inputBusca = document.getElementById("dadoBusca").value;
        
        if(inputBusca){

            navigate(`/editar/${inputBusca}`);
            // navigate(`/exibir/${inputBusca}`);

        }else{

            alert("Aconteceu um erro Inesperado ! ! !");

        }

    }

    return (

        <div className="divMenuBar">
            <p className="pLogo">LOGO</p>
            <div className="linkMenuBar">
                <span><Link to="/exibir">EXIBIR</Link></span>
                <span><Link to="/cadastrar" >CADASTRAR</Link></span>
                <div className="buscaDados">
                    <input ref={inputDado} id="dadoBusca" type="text" />
                    <input type="button" value="BUSCAR" onClick={ () => buscaDados()} />
                </div>
            </div>

        </div>

    )
}

export default AppMenuBar;