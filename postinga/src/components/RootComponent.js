import React from "react"
import NavbarComponent from "./templates/NavbarComponent";
import FooterComponent from "./templates/FooterComponent";

export default function RootComponent(){
    return (
        <div>
            <NavbarComponent />

            <FooterComponent />
        </div>
    )
}