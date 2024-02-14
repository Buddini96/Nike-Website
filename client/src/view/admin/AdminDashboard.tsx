import React, { Component, useEffect, useState } from "react";
// @ts-ignore
import nike from "../../assets/icons/white-icons/nike.png"
// @ts-ignore
import adminPro from "../../assets/icons/admin.png"
import {SideDashboard} from "../common/SideDashboard/SideDashboard";
// @ts-ignore
import one from "../../assets/images/dashboard/g.jpg"
// @ts-ignore
import two from "../../assets/images/dashboard/d.jpg"

// @ts-ignore
import three from "../../assets/images/dashboard/v.png"



// @ts-ignore
export class AdminDashboard extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            userData: "",

        };
    }

    componentDidMount() {
        fetch("http://localhost:4001/userData", {
            method: "POST",
            // @ts-ignore
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                // Update state using this.setState
                this.setState({ userData: data.data });

                //if (data.data.userType == "Admin") {
                    // Update state using this.setState
                    //this.setState({ admin: true });
                        //window.location.href="/adminDashboard";
                   // }
                // else
                //         window.location.href="/userDashboard";

            });
    };

    logOut=() => {
        window.localStorage.clear();
        window.location.href = "/login";
    };

    render() {
        // @ts-ignore
        const { admin } = this.state;
        // @ts-ignore
        const {userData} = this.state;
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
        return (
        // return admin ? <AdminHome /> : <UserHome userData={userData} />;
            <>
                {/*{admin ? (*/}
                {/*    window.location.href = "/AdminDashboard"*/}

                {/*    ) : (*/}
                {/*    // @ts-ignore*/}

                {/*    window.location.href = "/userDashboard"*/}
                {/*    )}*/}
                {/*{admin ? (*/}
                {/*    <Redirect to="/AdminDashboard" />*/}
                {/*) : (*/}
                {/*    <Redirect to="/userDashboard" />*/}
                {/*)}*/}
                {/*{admin ? (*/}
                    <div className={"relative flex min-h-screen"}>

                    {/*Sidebar*/}
                        <SideDashboard/>
                    {/*Main content*/}


                    <div className={"flex-1"}>
                        {/*header*/}
                        <div className={"flex justify-between items-center max-container text-cyan-700 font-extrabold bg-white shadow px-8 py-4"}>DASHBOARD
                            <div className={"flex justify-center items-center max-container ml-5"}>
                                <span className={"px-6"}>
                                    <div className={"bg-coral-red rounded-full w-11 h-11 "}>
                                        <img className={"w-10 h-10 items-center justify-center pl-1"} src={adminPro}/>
                                    </div>
                                </span>
                                <span className="pr-3 text-xl text-black font-semibold">Hello</span>
                                <span className="pr-6 text-xl font-bold text-coral-red">{userData.name}</span>
                            </div>
                        </div>
                        {/*content*/}
                        <div className={"p-8 text-cyan-700 font-extrabold"}>Content</div>
                        {/*<div className={""}>*/}
                        {/*    Name<h1>{userData.name}</h1>*/}
                        {/*    Email <h1>{userData.email}</h1>*/}
                        {/*    <br />*/}
                        {/*    <button onClick={this.logOut} className="btn btn-primary">*/}
                        {/*        Log Out*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                        <div className={"flex mt-10"}>

                            <img className=" rounded-lg shadow-xl dark:shadow-gray-800 w-1/3 mx-2"
                                 src={one} alt="image description"/>
                            <img className="h-auto  rounded-lg shadow-xl dark:shadow-gray-800 w-1/3 mx-1"
                                 src={two} alt="image description"/>
                            <img className="h-auto max-w-sm rounded-lg shadow-xl dark:shadow-gray-800 w-1/3 mx-1"
                                 src={three} alt="image description"/>

                        </div>
                        {/*<div className="flex ">*/}
                        {/*    <img src={one} className="w-1/3 mx-1" alt="Image 1"/>*/}
                        {/*        <img src={one} className="w-1/3 mx-1" alt="Image 2"/>*/}
                        {/*            <img src={one} className="w-1/3 mr-4" alt="Image 3"/>*/}
                        {/*</div>*/}
                    </div>
                </div>



            </>
        );
    }
}
