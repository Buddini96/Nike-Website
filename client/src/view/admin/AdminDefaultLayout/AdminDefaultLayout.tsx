import React, {Component} from "react";
import {AdminFooter} from "../AdminFooter/AdminFooter";
import {AdminNavbar} from "../AdminNavbar/AdminNavbar";
import {AdminMainContent} from "../AdminMainContent/AdminMainContent";

export class AdminDefaultLayout extends Component {
    render() {
        return (
            <>
                <AdminNavbar></AdminNavbar>
                {/*<AdminMainContent></AdminMainContent>*/}
                {/*<AdminFooter/>*/}
            </>
        );
    }
}
