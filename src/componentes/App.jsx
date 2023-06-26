import React from "react";
import AppHeader from "../componentes/AppHeader"
import {BrowserRouter} from "react-router-dom";
import "../css/App.css";

function App(){

    return (

        <BrowserRouter>

            <div className="container">

                <AppHeader /> 

            </div>
            
        </BrowserRouter>
    )
}

export default App;