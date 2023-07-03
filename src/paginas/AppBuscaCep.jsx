import React from "react";
import { FaSearch } from "react-icons/fa"
import { useState, useEffect, useRef } from "react";

import "../css/AppBuscaCep.css";

function AppBuscaCep(){

    const [ inputDado, setInputDado ] = useState("");
    const [ cep, setCep ] = useState({});
    const inputDigitado = useRef();

    useEffect( () => {

        if(inputDado === ""){
            inputDigitado.current.focus();
            setInputDado("");
            return; 
        }

        fetch(`https://viacep.com.br/ws/${inputDado}/json/`)
        .then( dados => dados.json())
        .then(data => {
            setCep(data)
            console.log(data)
        })
        .catch((err) => {
            //console.log(err)
            alert("Cep Inválido ! ! !")
        })

        

    }, [inputDado])

    function buscaDadoDigitado() {

        //console.log(inputDigitado.current.value)
        setInputDado(inputDigitado.current.value);
        inputDigitado.current.value = "";
        inputDigitado.current.focus();
        
    }

    return (

        <div className="containerBuscaCep">

            <h2>Busca CEP</h2>
            <div className="valorDigitadoInput">
                <input ref={inputDigitado} id="inputDiv" type="text" className="inputBuscaCep" />
                <FaSearch onClick={ () => buscaDadoDigitado()} ></FaSearch>
            </div>

            <div className="dadosBuscaCep">
                
                <span>{cep.cep}</span>
                <span>{cep.logradouro}</span>
                <span>{cep.complemento}</span>
                <span>{cep.bairro}</span>
                <span>{cep.localidade}</span>


            </div>

        </div>
    )
}

export default AppBuscaCep;