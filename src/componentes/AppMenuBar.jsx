import React from "react";
import "../css/AppMenuBar.css";

function AppMenuBar(){

    return (

        <div className="divMenuBar">
            <p className="pLogo">LOGO</p>
            <div className="linkMenuBar">
                <span>EXIBIR</span>
                <span>CADASTRAR</span>
                <div className="buscaDados">
                    <input type="text" />
                    <input type="button" value="BUSCAR"/>
                </div>
            </div>

        </div>

    )
}

export default AppMenuBar;