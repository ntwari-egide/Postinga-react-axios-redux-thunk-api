import React from "react"
import NavbarComponent from "./templates/NavbarComponent";
import FooterComponent from "./templates/FooterComponent";
import WelcomeComponent from "./postComponents/WelcomeComponent";
import {BrowserRouter as Router,Route} from "react-router-dom";
import CreatePostComponent from "./postComponents/CreatePostComponent";
export default function RootComponent(){
    return (
        <Router>
            <div>
                <NavbarComponent />
                <Route exact path="/" component={WelcomeComponent} />
                <Route exact path="/create-post" component={CreatePostComponent} />
                <Route exact path="/edit-post" />
                <FooterComponent />
            </div>
        </Router>
    )
}