// //import {Component} from "react";
// import React, {Component, useState} from "react";
//
//
//
//
// interface UserHomeProps {
//     userData: any
// }
//
// export class UserHome extends Component<UserHomeProps> {
//     // @ts-ignore
//     constructor(props) {
//         super(props);
//         this.state = {
//             userData: "",
//         };
//     }
//
//     componentDidMount() {
//         fetch("http://localhost:4001/userData", {
//             method: "POST",
//             // @ts-ignore
//             crossDomain: true,
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//                 "Access-Control-Allow-Origin": "*",
//             },
//             body: JSON.stringify({
//                 token: window.localStorage.getItem("token"),
//             }),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data, "userData");
//                 // Update state using this.setState
//                 this.setState({ userData: data.data });
//
//                 if (data.data.userType == "Admin") {
//                     // Update state using this.setState
//                     this.setState({ admin: true });
//                 }
//             });
//     };
//
//     // @ts-ignore
//     logOut=() => {
//         window.localStorage.clear();
//         window.location.href = "/login";
//     };
//
//
//
//
//     render() {
//
//
//
//
//         // @ts-ignore
//         //const { admin, setAdmin } = this.state;
//         // @ts-ignore
//         const {admin, setAdmin} = useState(false);
//         // @ts-ignore
//         const {userData} = useState("");
//         // @ts-ignore
//         // @ts-ignore
//         return (
//             // return admin ? <AdminHome /> : <UserHome userData={userData} />;
//             <>
//                 admin?<div>
//                     Name<h1>{userData.name}</h1>
//                     Email <h1>{userData.email}</h1>
//                 welcome Admin
//                     <br />
//                     <button onClick={this.logOut} className="btn btn-primary">
//                         Log Out
//                     </button>
//
//                 </div>:<UserHome userData = {userData}/>
//
//
//             </>
//         );
//     }
// }

import React, { Component } from "react";

interface UserHomeProps {
    userData: any;
}

export class UserHome extends Component<UserHomeProps> {
    constructor(props: UserHomeProps) {
        super(props);
        this.state = {
            userData: this.props.userData,
            admin: false,
        };
    }

    // componentDidMount() {
    //
    //     fetch("http://localhost:4001/userData", {
    //         method: "POST",
    //         // @ts-ignore
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             token: window.localStorage.getItem("token"),
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data, "userData");
    //
    //             this.setState({ userData: data.data });
    //
    //             if (data.data.userType === "Admin") {
    //                 this.setState({ admin: true });
    //             }
    //         });
    // }

    // @ts-ignore
    logOut = () => {
        window.localStorage.clear();
        window.location.href = "/login";
    };

    render() {
        // @ts-ignore
        const { userData, admin } = this.state;

        return (
            <>
                {admin ? (
                    <div>
                        Name<h1>{userData.name}</h1>
                        Email <h1>{userData.email}</h1>
                        Welcome Admin
                        <br />
                        <button onClick={this.logOut} className="btn btn-primary">
                            Log Out
                        </button>
                    </div>
                ) : (
                    <UserHome userData={userData} />
                )}
            </>
        );
    }
}

