import React from "react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import AppMenuBar from "./AppMenuBar";
import "../css/AppContainer.css"


function AppContainer(){

    return (

        <div className="container">

            <AppHeader />
            <AppMenu />
            <AppMenuBar />

        </div>

    )
}

export default AppContainer;