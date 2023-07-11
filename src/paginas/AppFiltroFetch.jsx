import React from "react";
import { useState, useEffect } from "react";

import "../css/AppFiltroFetch.css";

function AppFiltroFetch(){

    const [ produtos, setProdutos ] = useState([]);

    let indice = 0;

    useEffect( () => {
            
        fetch('https://dummyjson.com/products/') 
            .then( data => data.json())
            .then( json => setProdutos(json.products))
            .catch( () => { console.log("Aconteceu um erro")});

    }, [])

    function buscaProdutos(){

        const inputValor = document.querySelector(".divUl #inputBusca");
        const lis = Array.from(document.querySelectorAll(".divUl li"));

        for(let i = 0; i < lis.length; i++){

            if( lis[i].textContent.toLowerCase().includes(inputValor.value.toLowerCase()) ){
                lis[i].classList.remove("hideLi");
                
            }else{
                lis[i].classList.add("hideLi");
            }
        }

    }

    return ( 

        <div className="divUl">

            <input id="inputBusca" type="text" placeholder="Digite o item" onBlur={ () => buscaProdutos() } ></input>

            <ul>

                {produtos.map( ( prod )  => {

                    return <li className="lisUl" key={indice++}>{prod.title}</li>

                })}

            </ul>

        </div>
    )
}

export default AppFiltroFetch;