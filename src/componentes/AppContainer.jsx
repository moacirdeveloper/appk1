import React from "react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import "../css/AppContainer.css"


function AppContainer(){

    return (

        <div className="container">

            <AppHeader />
            <AppMenu />

        </div>

    )
}

export default AppContainer;