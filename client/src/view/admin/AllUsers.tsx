import React, {Component} from "react";
// @ts-ignore
import nike from "../../assets/icons/white-icons/nike.png"
// @ts-ignore
import adminPro from "../../assets/icons/admin.png"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface UserData {
    _id: string;
    name: string;
    email: string;
    userType: string;
}

export class AllUsers extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        // @ts-ignore
        this.state = {
            userData: "",
            data: [], // Assuming data is an array
            // Initialize setData as a function
            // @ts-ignore
            setData: (newData) => {
                this.setState({ data: newData });
            },
        };
        this.deleteUser = this.deleteUser.bind(this);
    }


    // componentDidMount() {
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
    //             // Update state using this.setState
    //             this.setState({ userData: data.data });
    //
    //             //if (data.data.userType == "Admin") {
    //             // Update state using this.setState
    //             //this.setState({ admin: true });
    //             //window.location.href="/adminDashboard";
    //             // }
    //             // else
    //             //         window.location.href="/userDashboard";
    //
    //         });
    // };


    componentDidMount() {
        this.getAllUsers();
        /*get all users data*/
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

        /*Get user current login data*/
        // @ts-ignore

    };


         logOut = () => {
            window.localStorage.clear();
            window.location.href = "/login";
        };


    getAllUsers = () => {
        // @ts-ignore
        const {data, setData} = this.state;
        fetch("http://localhost:4001/getAllUsers", {
            method: "GET"
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                // Update state using this.setState
                setData(data.data);

            });
    }

    // @ts-ignore
    deleteUser = (id, name) => {
        if (window.confirm(`Are you sure you want to delete ${name}`)){
            fetch("http://localhost:4001/deleteUser", {
                method: "POST",
                // @ts-ignore
                crossDomain: true,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
                body: JSON.stringify({
                    userid: id,
                }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        alert(data.data);
                        // Call getAllUsers only after the delete request is successful
                        this.getAllUsers();
                    } else {
                        alert("Failed to delete user");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting user:", error);
                    alert("Error deleting user");
                });
        }
    };

    // deleteUser = (id, name) => {
    //     if (window.confirm(`Are you sure you want to delete ${name}`)) {
    //         fetch("http://localhost:4001/deleteUser", {
    //             method: "POST",
    //             // @ts-ignore
    //             crossDomain: true,
    //             headers: {
    //                 "Content-Type": "application/json",
    //                 Accept: "application/json",
    //                 "Access-Control-Allow-Origin": "*",
    //             },
    //             body: JSON.stringify({
    //                 userid: id,
    //             }),
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 if (data.success) {
    //                     alert(data.data);
    //                     // Call getAllUsers only after the delete request is successful
    //                     this.getAllUsers();
    //                 } else {
    //                     alert("Failed to delete user");
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error("Error deleting user:", error);
    //                 alert("Error deleting user");
    //             });
    //     }
    // };



// @ts-ignore
    render() {
        // @ts-ignore
        const { admin } = this.state;
        // @ts-ignore
        const {userData} = this.state;
        // @ts-ignore
        const {data, setData} = this.state;
        //const data = [];

        // @ts-ignore
        // @ts-ignore
        return (
            // return admin ? <AdminHome /> : <UserHome userData={userData} />;
            <>

                <div className={"relative flex min-h-screen"}>

                    {/*Sidebar*/}
                    <div className={"bg-coral-red text-cyan-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 " +
                        "left-0 md:relative md:-translate-x-0 transform -translate-x-full transition duration-200"}>
                        <a href={""} className={"flex items-center space-x-2 px-4 py-3 text-white"}>
                            {/*<svg xmlns="http://www.w3.org/2000/svg"*/}
                            {/*     fill="none"*/}
                            {/*     viewBox="0 0 24 24"*/}
                            {/*     stroke-width="1.5"*/}
                            {/*     stroke="currentColor"*/}
                            {/*     className="h-10 w-10">*/}
                            {/*    <path*/}
                            {/*        stroke-linecap="round"*/}
                            {/*        stroke-linejoin="round"*/}
                            {/*          d="m21 7.5-2.25-1.313M21 7.5v2.25m0-2.25-2.25 1.313M3 7.5l2.25-1.313M3*/}
                            {/*          7.5l2.25 1.313M3 7.5v2.25m9 3 2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0*/}
                            {/*          6.75 2.25-1.313M12 21.75V19.5m0 2.25-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21*/}
                            {/*          14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"/>*/}
                            {/*</svg>*/}
                            <img className={"h-10 w-10 text-white"} src={nike}/>
                            <span className={"text-2xl font-extrabold text-white"}>Nike</span>
                        </a>
                        <nav>
                            <a href={"/userDashboard"} className={"flex items-center group space-x-2 px-4 py-3 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 transition duration-200"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round"
                                          stroke-linejoin="round"
                                          d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5
                                          9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125
                                          1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504
                                          1.125-1.125V9.75M8.25 21h8.25"/>
                                </svg>
                                <span className={"text-white group-hover:text-cyan-300"}>Dashboard</span>
                            </a>
                            <a href={"/allUsers"} className={"flex items-center group space-x-2 px-4 py-3 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 transition duration-200"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125
                                          4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15
                                          19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331
                                          0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12
                                          6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625
                                          2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                                </svg>
                                <span className={"text-white group-hover:text-cyan-300"}>Users</span>
                            </a>
                            <a href={"/"} className={"flex items-center group space-x-2 px-4 py-3 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 transition duration-200"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0
                                          3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3
                                          12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25
                                          0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"/>
                                </svg>
                                <span className={"text-white group-hover:text-cyan-300"}>Products</span>
                            </a>
                            <a href={"/"} className={"flex items-center group space-x-2 px-4 py-3 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 transition duration-200"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none"
                                     viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25
                                          2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21
                                          18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"/>
                                </svg>
                                <span className={"text-white group-hover:text-cyan-300"}>Calander</span>
                            </a>


                            <a className={"flex items-center group space-x-2 px-4 py-3 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 transition duration-200"}>
                                <button onClick={this.logOut} className={""}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         fill="none"
                                         viewBox="0 0 24 24"
                                         stroke-width="1.5"
                                         stroke="currentColor"
                                         className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25
                                          2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"/>
                                    </svg>
                                </button>
                                {/*<button onClick={this.logOut} className="text-white group-hover:text-cyan-300">*/}
                                {/*    Log Out*/}
                                {/*</button>*/}
                                <span className={"text-white group-hover:text-cyan-300"}>Log Out</span>
                            </a>

                            <a className={"flex items-center group space-x-2 py-3 px-4 hover:bg-[#ef4444] " +
                                "rounded hover:text-cyan-300 content-end transition duration-200 mt-[315px]"}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                     fill="none" viewBox="0 0 24 24"
                                     stroke-width="1.5"
                                     stroke="currentColor"
                                     className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25
                                              2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25
                                              2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25
                                              2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1
                                              1.183-1.981l7.5-4.039a2.25
                                              2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"/>
                                </svg>
                                <span className={"text-white group-hover:text-cyan-300"}>{userData.email}</span>
                            </a>


                        </nav>
                    </div>
                    {/*Main content*/}
                    <div className={"flex-1"}>
                        {/*header*/}
                        <div className={"flex justify-between items-center max-container bg-white shadow px-2 py-4"}>Header
                            <div className={"flex justify-center items-center max-container ml-5"}>
                                <span className={"px-6"}>
                                    <div className={"bg-coral-red rounded-full w-11 h-11 "}>
                                        <img className={"w-10 h-10 items-center justify-center pl-1"} src={adminPro}/>
                                    </div>
                                </span>
                                <span className="pr-3 text-xl">Hello  </span>
                                <span className="pr-6 text-xl font-bold text-coral-red">{userData.name}</span>
                            </div>
                        </div>
                        {/*content*/}
                        <div className={"p-8 text-cyan-700 font-extrabold"}>All Users</div>
                        <div className={""}>
                            <table className={"w-full pr-3 justify-center items-center border-black"}>
                                <thead className={"bg-gray-50 border-b-2 border-gray-200"}>
                                <tr className={""}>
                                    <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Name</th>
                                    <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Email</th>
                                    <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>User Type</th>
                                    <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Delete</th>
                                </tr>
                                </thead>

                                {data && data.map((i: UserData) => (
                                    <tr className={"bg-white border-b-2 text-center"} key={i.email}>
                                        <td className={"p-3 text-sm text-gray-700"}>{i.name}</td>
                                        <td className={"p-3 text-sm text-gray-700"}>{i.email}</td>
                                        <td className={"p-3 text-sm text-gray-700"}>{i.userType}</td>
                                        <td>
                                            <FontAwesomeIcon
                                                icon={faTrash}
                                                onClick={() => this.deleteUser(i._id, i.name)}
                                            />
                                        </td>
                                    </tr>
                                ))}

                            </table>
                        </div>
                    </div>


                </div>

            </>
        );
    }
}
