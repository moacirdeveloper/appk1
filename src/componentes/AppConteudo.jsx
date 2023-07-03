import React from "react";
import { Routes, Route } from "react-router-dom";
import AppCadastrar from "../paginas/AppCadastrar";
import AppBuscaCep from "../paginas/AppBuscaCep";
import AppFiltroMenu from "../paginas/AppFiltroMenu";
import "../css/AppConteudo.css";

function AppConteudo(){

    return (
        
            <div className="main">
            
                <Routes>
                        <Route path="/" element={""} />
                        <Route path="/cadastrar" element={<AppCadastrar />} />
                        <Route path="/buscacep" element={<AppBuscaCep />} />
                        <Route path="/filtro" element={<AppFiltroMenu />}></Route>
                </Routes>   

            </div>

    )
}

export default AppConteudo;