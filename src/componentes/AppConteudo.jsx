import React from "react";
import { Routes, Route } from "react-router-dom";
import AppCadastrar from "../paginas/AppCadastrar";
import AppBuscaCep from "../paginas/AppBuscaCep";
import "../css/AppConteudo.css";

function AppConteudo(){

    return (
        
            <div className="main">
            
                <Routes>
                        <Route path="/" element={""} />
                        <Route path="/cadastrar" element={<AppCadastrar />} />
                        <Route path="/buscacep" element={<AppBuscaCep />} />
                </Routes>   

            </div>

    )
}

export default AppConteudo;