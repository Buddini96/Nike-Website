import React, {Component} from "react";
// @ts-ignore
import nike from "../../assets/icons/white-icons/nike.png"
// @ts-ignore
import adminPro from "../../assets/icons/admin.png"
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SideDashboard} from "../common/SideDashboard/SideDashboard";


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
                    <SideDashboard/>

                    {/*Main content*/}
                    <div className={"flex-1"}>
                        {/*header*/}
                        <div className={"flex justify-between items-center max-container text-cyan-700 font-extrabold bg-white shadow px-8 py-4"}>USERS
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
                        <div className={"p-9"}>
                            <table className={"w-full pr-3 justify-center items-center border-black shadow-2xl"}>
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
                                                className={"bg-red-600 p-1.5 rounded-md"}
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
