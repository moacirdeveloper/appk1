import React from "react";

import "../css/AppFiltroMenuBar.css";

function AppFiltroMenuBar() {

    function buscaValor() {

        const ulMain = document.querySelector(".ulprincipal")

        const inputValor = document.querySelector(".dadoinput");

        const detailTag = Array.from(ulMain.querySelectorAll("details"));
        //const summaryTag = Array.from(ulMain.querySelectorAll("summary"));

        //const lisDetail = ulMain.querySelectorAll("li");

        //console.log(lisDetail[3].textContent);

        detailTag.forEach(item => {

            //console.log(item);

            const itemSummary = item.querySelector("summary");
            //const itemli = item.querySelector("li");

            //acessandos as lis
            const lisDetail = item.querySelectorAll("li");

            let found = false;

            //detail
            if (itemSummary.textContent.toLowerCase().includes(inputValor.value.toLowerCase())) {

                item.setAttribute("open", "");

            } else {
                
                item.removeAttribute("open");

            }

            //lis
            for(let i = 0; i < lisDetail.length; i++){

                if(lisDetail[i].textContent.toLowerCase().includes(inputValor.value.toLowerCase())){
                    
                    lisDetail[i].classList.remove("hide");
                    found = true;

                }else{

                    lisDetail[i].classList.add("hide");

                }

                //abrindo detail
                if(found){
                    item.setAttribute("open", "");
                }

            }
            
        })

        //console.log(inputValor.value.toLowerCase());

    }

    return (

        <div className="divprincipal">

            <input className="dadoinput" type="text" placeholder="Pesquisar..." onBlur={() => buscaValor()}></input>
            <ul data-ul="ullista" className="ulprincipal">
                <li>
                    <details>
                        <summary>FRUTAS</summary>
                        <ul>
                            <li>Limao</li>
                            <li>Abacate</li>
                            <li>Uva</li>
                            <li>Jaca</li>
                            <li>Jabuticaba</li>
                        </ul>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>PAISES</summary>
                        <ul>
                            <li>EUA</li>
                            <li>NAMIBIA</li>
                            <li>BRASIL</li>
                            <li>CANADA</li>
                            <li>ARGENTINA</li>
                        </ul>
                    </details>
                </li>

                <li>
                    <details>
                        <summary>LINGUAS</summary>
                        <ul>
                            <li>Ingles</li>
                            <li>Alemao</li>
                            <li>Frances</li>
                            <li>Portugues</li>
                            <li>Arabe</li>
                        </ul>
                    </details>
                </li>

            </ul>

        </div>
    )
}

export default AppFiltroMenuBar;