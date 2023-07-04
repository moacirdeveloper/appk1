import React from "react";

import { useEffect } from "react";

import "../css/AppCadastrar.css";

function AppCadastrar(){

    useEffect( () => {

        let resultado = JSON.parse(localStorage.getItem("dbNoticia"));
    
        if(resultado === null){
    
            localStorage.dbNoticia = "[]";
    
            console.log("Criado Banco Noticia");
    
        }
    
    }, [    ]);

    function incluirDados(){

        const tituloInput = document.getElementById("titulo");
        const noticiaTextarea = document.getElementById("noticia");
        let dadosFormulario = {}

        if(tituloInput.value && noticiaTextarea.value){

            dadosFormulario = {
                titulo: tituloInput.value,
                noticia: noticiaTextarea.value
            }

            let dbNoticia = JSON.parse(localStorage.getItem("dbNoticia"));

            dbNoticia.push(dadosFormulario);

            localStorage.setItem("dbNoticia", JSON.stringify(dbNoticia));

            const aviso = document.getElementById("retorno");
            aviso.style.display = "flex";
            tituloInput.value = "";
            noticiaTextarea.value = "";

            setTimeout( () => {

                aviso.style.display = "none";
                tituloInput.focus();

            }, 3000);

        }else{

            console.log("Campos em Branco ! ! !");

        }

    }

    return (

        <div className="containerCadastrar">
            <div className="dadosCadastrar">
                <input type="text" id="titulo" placeholder="Digite titulo..."/>
                <textarea id="noticia" cols="10" rows="10" placeholder="Digite a noticia..."></textarea>
            </div>
            <div className="botoesCadastrar">
                <input type="button" value="LIMPAR" />
                <input type="button" value="CANCELAR" />
                <input type="button" value="INCLUR" onClick={ () => incluirDados()} />
                
            </div>

            <div id="retorno">Registro Incluído Com Sucesso !</div>

        </div>
    )
}

export default AppCadastrar;