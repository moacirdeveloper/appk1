import React from "react";
import AppContainer from "./AppContainer";
import {BrowserRouter} from "react-router-dom";
import "../css/App.css";

function App(){

    return (

        <BrowserRouter>

                <AppContainer /> 
            
        </BrowserRouter>
    )
}

export default App;