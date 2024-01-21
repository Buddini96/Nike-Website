import React, {Component} from "react";
// @ts-ignore
import adminPro from "../../assets/icons/admin.png"

export class AdminMainContent extends Component {
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
        return (
            <div className={"flex-1"}>
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
                <div className={"p-8 text-cyan-700 font-extrabold"}>content</div>
            </div>
        );
    }
}
