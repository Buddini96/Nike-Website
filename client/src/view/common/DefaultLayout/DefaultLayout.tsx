import React, {Component} from "react";
import {Navbar} from "../Navbar/Navbar";
import {MainContent} from "../MainContent/MainContent";
import {Footer} from "../Footer/Footer";

export class DefaultLayout extends Component {
    render() {
        return (
            <>
                <Navbar></Navbar>
                <MainContent></MainContent>
                <Footer/>
            </>
        );
    }
}