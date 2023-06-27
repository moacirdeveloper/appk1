import React from "react";
import AppHeader from "./AppHeader";
import AppMenu from "./AppMenu";
import AppMenuBar from "./AppMenuBar";
import AppConteudo from "./AppConteudo";
import AppFooter from "./AppFooter";
import "../css/AppContainer.css"


function AppContainer(){

    return (

        <div className="container">

            <AppHeader />
            <AppMenu />
            <AppMenuBar />
            <AppConteudo />
            <AppFooter />

        </div>

    )
}

export default AppContainer;