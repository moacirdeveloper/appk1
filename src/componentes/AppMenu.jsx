import React, {useState} from "react";
import { Link } from "react-router-dom";
import "../css/AppMenu.css";

function AppMenu() {

    const [modal] = useState("fadeAbrir")

    function abreModal(){

        let abreModal = document.querySelector(".fade");

        abreModal.classList.toggle(modal);

    }

    function fechaModal(){

        let fechaModal = document.querySelector(".fade");

        fechaModal.classList.remove(modal);

    }

    return (

        <div className="navLink">

            <ul className="ulNavLink">
                <li onClick={() => abreModal()}>MODAL</li>
                <li><Link to="/filtrobar">FILTRO</Link></li>
                <li>CARRINHO</li>
                <li><Link to="/buscacep">CEP</Link></li>
            </ul>

            <div className="fade">
                <div className="modal">
                    <div className="headerModal">
                        <span>MODAL</span>
                        <input type="button" className="" onClick={() => fechaModal()} value="Fechar" />

                    </div>
                    <div className="conteudoModal">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellendus!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AppMenu;