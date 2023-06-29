import React from "react";
import { useState, useEffect } from "react";

import "../css/AppBuscaCep.css";

function AppBuscaCep(){

    const [ cep, setCep ] = useState({});

    useEffect( () => {

        fetch("https://viacep.com.br/ws/01001000/json/")
        .then( dados => dados.json())
        .then(data => {
            setCep(data)
            console.log(data)
        })
        .catch((err) => console.log(err))

    }, [])

    return (

        <div className="containerBuscaCep">

            <h2>Busca CEP</h2>
            <div className="dadosBuscaCep">
                
                {cep.cep}<br />
                {cep.logradouro}<br />
                {cep.complemento}<br />
                {cep.bairro}<br />
                {cep.localidade}


            </div>

        </div>
    )
}

export default AppBuscaCep;