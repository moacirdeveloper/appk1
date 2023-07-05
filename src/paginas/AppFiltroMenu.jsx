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

            if(li.textContent.toLowerCase().includes(busca.toLowerCase())){

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
                
                <li>Frutas
                    <ul className="frutas">
                        <li>Limao</li>
                        <li>Banana</li>
                        <li>Uva</li>
                        <li>Abacate</li>
                        <li>Melancia</li>
                    </ul>
                </li>
                <li>Paises
                    <ul className="paises">
                        <li>Franca</li>
                        <li>Alemanha</li>
                        <li>Italia</li>
                        <li>Russia</li>
                        <li>Argentina</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default AppFiltroMenu;