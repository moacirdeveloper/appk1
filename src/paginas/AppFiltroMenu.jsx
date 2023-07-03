import React from "react";
import { useRef } from "react";

import "../css/AppFiltroMenu.css";

function AppFiltroMenu(){

    const inputFiltro = useRef();
    const ulLista = useRef();

    let itensLista, busca = "";

    function filtrarLista(){

        itensLista = document.querySelectorAll(".listaFiltroMenu li");

        //console.log(itensLista);

        busca = inputFiltro.current.value;

        for(let li of itensLista){

            if(li.textContent.includes(busca)){

                li.style.display = "block";

            }else{

                li.style.display = "none";

            }
            
        }

    }

    return (
        
        <div className="filtroMenu">
            <input ref={inputFiltro} type="text" name="" id="" onBlur={ () => filtrarLista() } />
            <ul ref={ulLista} className="listaFiltroMenu">
                
                <li>Limao</li>
                <li>Banana</li>
                <li>Uva</li>
                <li>Abacate</li>
                <li>Melancia</li>
                
            </ul>
        </div>
    )
}

export default AppFiltroMenu;