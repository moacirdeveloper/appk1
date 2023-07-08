import React from "react";
import { Link } from "react-router-dom";
import "../css/AppMenuBar.css";

function AppMenuBar(){

    return (

        <div className="divMenuBar">
            <p className="pLogo">LOGO</p>
            <div className="linkMenuBar">
                <span><Link to="/exibir">EXIBIR</Link></span>
                <span><Link to="/cadastrar" >CADASTRAR</Link></span>
                <div className="buscaDados">
                    <input type="text" />
                    <input type="button" value="BUSCAR"/>
                </div>
            </div>

        </div>

    )
}

export default AppMenuBar;