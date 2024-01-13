import React, {Component} from "react";

export class UserDashboard extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }
    componentDidMount() {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
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
                // @ts-ignore
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({userData: data.data});
                // if(data.status == "ok"){
                //     alert("Login Successful")
                // // @ts-ignore
                // window.localStorage.setItem("token", data.data);
                // window.location.href="/userDashboard";
                // }
            });
    };


    // componentDidMount() {
    //     fetch("http://localhost:4001/userData", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({
    //             token: window.localStorage.getItem("token"),
    //         }),
    //     })
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data, "userData");
    //             this.setState({userData: data.data});
    //             if (data.status === "ok") {
    //                 alert("Login Successful");
    //                 window.localStorage.setItem("token", data.data);
    //                 // Use react-router-dom for navigation instead of window.location.href
    //                 // @ts-ignore
    //                 this.props.history.push("/userDashboard");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Fetch error:", error);
    //             // Handle the error appropriately, e.g., display an error message to the user
    //         });
    // };

    render() {
        // @ts-ignore
        const {userData} = this.state;
        return (
            <div className={"text-black"}>

               Name
                <h1 className={"font-bold text-xl"}>{userData.name}</h1>
                Email
                <h1 className={"font-bold text-xl"}>{userData.email}</h1>
            </div>
        );
    }
}
