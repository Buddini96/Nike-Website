import React, {Component} from "react";
// @ts-ignore
import coverImg from "../../../assets/images/bg9.jpg"
// @ts-ignore
import google from "../../../assets/icons/google.png"
// @ts-ignore
import nike from "../../../assets/icons/nike.png"
// @ts-ignore
import nikeLogo from "../../../assets/icons/nikeLogo.png"
import {Link} from "react-router-dom";


export class Login extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // @ts-ignore
    handleSubmit(e) {
        e.preventDefault();
        // @ts-ignore
        const {email: email, password: password} = this.state;
        console.log(email, password);

        // @ts-ignore
        fetch("http://localhost:4001/login/", {
            method: "POST",
            // @ts-ignore
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
                if (data.status == "ok") {
                    alert("Login Successful");
                    // @ts-ignore
                    window.localStorage.setItem("token", data.data);
                    window.location.href="/userDashboard";

                } else {
                    alert("Something went wrong");
                }
            });

    };

    render() {
        return (
            // <div className={"flex h-screen bg-black"}>
            //     {/*<h1 className={"text-center text-teal-800 text-3xl"}>This is Log In Page</h1>*/}
            //     <div className={"h-auto mt-4 mb-4 pl-9 mx-auto border-gray-500 border-2 bg-white"}>
            //         <h2 className={"text-3xl underline decoration-2 font-bold pt-2 pb-2"}>Sign In</h2>
            //
            //         <form className={"h-auto p-2 justify-center"}>
            //             <div className={"pb-2 mt-5"}>
            //                 <label className={"text-12px"} htmlFor={""}>Your Email : </label>
            //                 <input className={"float-right border-[2px] border-black"} type={"email"}/>
            //             </div>
            //
            //             <div className={"pb-2 mt-3"}>
            //                 <label className={"text-12px mt-3"} htmlFor={""}>Your Password : </label>
            //                 <input className={"float-right border-[2px] border-black"} type={"password"}/>
            //             </div>
            //
            //             <div className={"mt-2"}>
            //                 <button className={"w-full text-[12px] p-[6px] bg-green-900 mt-5 rounded-3xl text-white text-[14px] hover:bg-black"} type={"button"}>
            //                     Sign In
            //                 </button>
            //             </div>
            //
            //
            //         </form>
            //     </div>
            // </div>

            <div className={"w-full h-screen flex items-start"}>
                <div className={"relative w-1/2 h-full flex flex-col"}>
                    <div className={"absolute top-[80%] left-[10%] flex flex-col"}>
                        <h1 className={"text-5xl text-white font-bold my-4"}>IT'S BETTER AS A MEMBER</h1>
                        <p className={"text-xl text-white font-normal"}>Move, Shop, Customize and Celebrate with the best of Nike.</p>
                    </div>
                    <img src={coverImg} className={"w-full h-full object-cover"}/>
                </div>

                <div className={"w-1/2 h-full bg-[#F5F5F5] flex flex-col p-20 justify-between items-center"}>

                    {/*<h1 className={"w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mr-auto"}>Nike</h1>*/}
                <img className={"w-[90px] h-[70px] pb-4"} src={nikeLogo}/>
                    {/*mr-[27rem]*/}

                <form onSubmit={this.handleSubmit}>
                <div className={"w-full flex flex-col  max-w-[500px]"}>
                    <div className={"w-full flex flex-col mb-2"}>
                    <h3 className={"text-3xl font-semibold mb-2"}>Login</h3>
                    <p className={"text-base mb-2"}>Welcome Back! Please enter your details.</p>
                    </div>

                    <div className={"w-full flex flex-col"}>
                        <input
                            type={"email"}
                            placeholder={"Email"}
                            onChange={(e) => this.setState({email: e.target.value})}
                            className={"w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"}/>

                        <input
                            type={"password"}
                            placeholder={"Password"}
                            onChange={(e) => this.setState({password: e.target.value})}
                            className={"w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"}/>
                    </div>

                    <div className={"w-full flex items-center justify-center"}>
                        <div className={"w-full flex items-center"}>
                           <input type={"checkbox"} className={"w-4 h-4 mr-2"}/>
                            <p className={"text-sm"}>Remember Me for 30 days</p>
                        </div>

                        <p className={"text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2"}>Forgot Password ?</p>
                    </div>

                    <div className={"w-full flex flex-col my-4"}>
                        <button type={"submit"} className={"w-full my-2 font-semibold text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer"}>
                            <Link to={'/userDashboard'}>
                                Log in
                            </Link>
                        </button>
                        <button className={"w-full my-2 font-semibold text-[#060606] bg-white border  border-black rounded-md p-4 text-center flex items-center justify-center cursor-pointer"}>
                            <Link to={'/Register'}>
                            Register
                            </Link>
                        </button>
                    </div>

                    <div className={"w-full flex items-center justify-center relative py-2"}>
                        <div className={"w-full h-[1px] bg-black/40"}></div>
                        <p className={"text-lg absolute text-black/80 bg-[#F5F5F5]"}>or</p>
                    </div>
                    <div className={"w-full my-2 font-semibold text-[#060606] bg-white border  border-black/40 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"}>
                        <img src={google} className={"h-6 mr-2"}/>
                        Sign In with Google
                    </div>
                </div>
                 </form>

                    <div className={"w-full flex items-center justify-center "}>
                        <p className={"text-sm font-normal text-[#060606]"}>Don't have a account? <span className={"font-semibold underline underline-offset-2"}>Sign up for free</span></p>
                    </div>
                </div>
            </div>
        );
    }
}
