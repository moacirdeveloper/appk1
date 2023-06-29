import React from "react";

import "../css/AppCadastrar.css";

function AppCadastrar(){

    return (

        <div className="containerCadastrar">
            <div className="dadosCadastrar">
                <input type="text" name="" id="" placeholder="Digite titulo..."/>
                <textarea cols="10" rows="10" placeholder="Digite a noticia..."></textarea>
            </div>
            <div className="botoesCadastrar">
                <input type="button" value="LIMPAR" />
                <input type="button" value="CANCELAR" />
                <input type="button" value="INCLUR" />
                
            </div>
        </div>
    )
}

export default AppCadastrar;