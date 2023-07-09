import React from "react";
import { useState, useEffect } from "react";

import "../css/AppFiltroFetch.css";

function AppFiltroFetch(){

    const [ produtos, setProdutos ] = useState([]);

    let indice = 0;

    useEffect( () => {

        fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(json => setProdutos(json.products))
        .catch( () => console.log("Aconteceu um erro Inesperado ! ! !"))

    }, [])

    // produtos.map( (item) => {
    //     return console.log( item.title);
    // })

    return ( 

        <div className="divUl">

            <ul>

                {produtos.map( ( prod)  => {

                    return <li key={indice++}>{prod.title}</li>

                })}

            </ul>

        </div>
    )
}

export default AppFiltroFetch;