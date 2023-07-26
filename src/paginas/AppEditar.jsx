import React from "react";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import AppLoading from "../layout/AppLoading";

import "../css/AppEditar.css";

let arrNoticia = [];

function AppEditar(){

    let [inputT, setInputT] = useState("");
    let [inputN, setInputN] = useState("");

    let { obj } = useParams();

    useEffect( () => {

        setTimeout( () => {arrNoticia = JSON.parse(localStorage.getItem("dbNoticia"));

        let arrStorageNew = arrNoticia.filter( (item) => {
            return item.titulo.includes(obj);
        }); 

        setInputT(arrStorageNew[0].titulo);
        setInputN(arrStorageNew[0].noticia)

        console.log(arrStorageNew);
        console.log(arrNoticia);
        }, 5000);

    }, [obj]);

    function alterarValorTitulo(e){
        setInputT(e.target.value);
        console.log(inputT);
    }
    
    function alterarValorNoticia(e){
        setInputN(e.target.value);
        console.log(inputN);
    }

    function editarNoticia(){

        const novoDbNoticia = arrNoticia.map( item => {
            
            if(item.titulo.includes(obj)){
                item.titulo = inputT;
                item.noticia = inputN;
            }

            return item;

        });

        localStorage.setItem("dbNoticia", JSON.stringify(novoDbNoticia));

        alert("Atualização Efetuado com Sucesso !");

    }

    function modificaValor(param){

        const dado = param.currentTarget.value;
        const id = param.currentTarget.id;

        console.log(dado);
        console.log(id);
        console.log(param.currentTarget.value);
    }

    return (

        <>

        {inputT ? (

            <div className="divEditar">

                <input id="inputTitulo" type="text" value={inputT} name="titulo" onChange={ (e) => alterarValorTitulo(e) } />
                <input id="inputNoticia" type="text" value={inputN} name="noticia" onChange={alterarValorNoticia} />
                <input id="inputModifica" type="text" onChange={ (e) => modificaValor(e) }></input>
                <input type="button" value="EDITAR" onClick={ () => editarNoticia() }/>
                <hr></hr>
                <span id="spanId"></span>
            
            </div>
        
        ) : (

            <div className="divEditar">

            <AppLoading />

            </div>

        )
        
        }

        </>

    )
}

export default AppEditar;