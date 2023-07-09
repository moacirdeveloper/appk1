import React from "react";
import { Routes, Route } from "react-router-dom";
import AppCadastrar from "../paginas/AppCadastrar";
import AppBuscaCep from "../paginas/AppBuscaCep";
import AppFiltroMenu from "../paginas/AppFiltroMenu";
import AppFiltroMenuBar from "../paginas/AppFiltroMenuBar";
import AppFiltroFetch from "../paginas/AppFiltroFetch";
import AppExibir from "../paginas/AppExibir";

import "../css/AppConteudo.css";

function AppConteudo(){

    return (
        
            <div className="main">
            
                <Routes>
                        <Route path="/" element={""} />
                        <Route path="/cadastrar" element={<AppCadastrar />} />
                        <Route path="/buscacep" element={<AppBuscaCep />} />
                        <Route path="/filtro" element={<AppFiltroMenu />}></Route>
                        <Route path="/filtrobar" element={<AppFiltroMenuBar />}></Route>
                        <Route path="/filtroprodutos" element={<AppFiltroFetch />}></Route>
                        <Route path="/exibir" element={<AppExibir />}></Route>
                </Routes>   

            </div>

    )
}

export default AppConteudo;