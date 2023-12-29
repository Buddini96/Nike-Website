import {Component} from "react";
// @ts-ignore
import coverImg from "../../../assets/images/bg9.jpg"

export class Login extends Component {
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

                <div className={"w-1/2 h-full bg-[#E0E0E0] flex flex-col p-20 justify-between"}>
                    <h1 className={"text-xl text-[#060606] font-semibold"}>Nike</h1>

                <div className={"w-full flex flex-col max-w-[500px]"}>
                    <div className={"w-full flex flex-col mb-2"}>
                    <h3 className={"text-3xl font-semibold mb-2"}>Login</h3>
                    <p className={"text-base mb-2"}>Welcome Back! Please enter your details.</p>
                    </div>

                    <div className={"w-full flex flex-col"}>
                        <input
                            type={"email"}
                            placeholder={"Email"}
                            className={"w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"}/>

                        <input
                            type={"password"}
                            placeholder={"Password"}
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
                        <button className={"w-full text-white bg-[#060606] rounded-md p-4 text-center flex items-center justify-center"}>
                            Log in
                        </button>
                    </div>
                </div>

                    <div className={"w-full flex items-center justify-center "}>
                        <p className={"text-sm font-normal text-[#0606060]"}>Don't have a account? <span className={"font-semibold underline underline-offset-2"}>Sign up for free</span></p>
                    </div>
                </div>
            </div>
        );
    }
}