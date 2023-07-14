import React from "react";
import { useEffect } from "react";

import "../css/AppSignIn.css";

function AppSignIn(){

    useEffect( () => {

        const retorno = JSON.parse(localStorage.getItem("dbUsuarios"))

        if(retorno === null){
            localStorage.dbUsuarios = "[]";
        }

    },[])

    function logarSistema(){

        let usuario = document.getElementById("inputUsuario");
        let senha = document.getElementById("inputSenha");

        const dbUsuarios = JSON.parse(localStorage.getItem("dbUsuarios"));

        if(usuario.value === "" || senha.value === ""){
            alert("Dados de Entrada Inválidos ou Nulos ! ! !");
            limpaFormulario(usuario, senha);
            return;
        }else{

            if(dbUsuarios === []){
                alert("Usuario Não Cadastrado ! ! !");
                
            }else{

                let find = false;

                dbUsuarios.filter( item => {

                        if(item.user === usuario.value){
                            find = true
                        }

                        return find;
                    }

                )
                
                if(find){

                    alert("Usuario Foi Autenticado ! !")

                }else{

                    alert("Usuario Não Foi Autenticado ! ! !")

                }
        
            }

        }

        limpaFormulario(usuario, senha);

    }

    function cadastrarSistema(){

        let usuario = document.getElementById("inputUsuario");
        let senha = document.getElementById("inputSenha");

        if( usuario.value === "" || senha.value === ""){
            alert("Dados de entrada Inválidos");
            limpaFormulario(usuario, senha)
            return;
        }

        const objUsuario = {
            user: usuario.value,
            pass: senha.value
        }

        let arrBancoUsuario = JSON.parse(localStorage.getItem("dbUsuarios"));

        arrBancoUsuario.push(objUsuario);

        localStorage.setItem("dbUsuarios", JSON.stringify(arrBancoUsuario));

        alert("Usuario Cadastrado Com Sucesso ! ! !");

        limpaFormulario(usuario, senha)

    }

    function limpaFormulario(usuario, senha){
        usuario.value = "";
        senha.value = "";
        usuario.focus();
    }

    return (

        <div id="divSign">

            <input id="inputUsuario" type="text" placeholder="Digite o usuario..." />
            <input id="inputSenha" type="text" placeholder="Digite a senha..." />
            <input id="btnEntrar" type="button" value="E N T R A R" onClick={ () => logarSistema() }/>
            <input type="button" value="C A D A S T R A R"  onClick={ () => cadastrarSistema() } />

        </div>

    )

}

export default AppSignIn;