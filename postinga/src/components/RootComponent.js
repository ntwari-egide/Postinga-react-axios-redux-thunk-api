import React from "react"
import NavbarComponent from "./templates/NavbarComponent";
import FooterComponent from "./templates/FooterComponent";
import WelcomeComponent from "./postComponents/WelcomeComponent";
export default function RootComponent(){
    return (
        <div>
            <NavbarComponent />
            <WelcomeComponent />
            <FooterComponent />
        </div>
    )
}