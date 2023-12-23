import {Component} from "react";

export class Login extends Component {
    render() {
        return (
            <div className={"flex h-screen bg-black"}>
                {/*<h1 className={"text-center text-teal-800 text-3xl"}>This is Log In Page</h1>*/}
                <div className={"h-auto mt-4 mb-4 pl-9 mx-auto border-gray-500 border-2 bg-white"}>
                    <h2 className={"text-3xl underline decoration-2 font-bold pt-2 pb-2"}>Sign In</h2>

                    <form className={"h-auto p-2 justify-center"}>
                        <div className={"pb-2 mt-5"}>
                            <label className={"text-12px"} htmlFor={""}>Your Email : </label>
                            <input className={"float-right border-[2px] border-black"} type={"email"}/>
                        </div>

                        <div className={"pb-2 mt-3"}>
                            <label className={"text-12px mt-3"} htmlFor={""}>Your Password : </label>
                            <input className={"float-right border-[2px] border-black"} type={"password"}/>
                        </div>

                        <div className={"mt-2"}>
                            <button className={"w-full text-[12px] p-[6px] bg-green-900 mt-5 rounded-3xl text-white text-[14px] hover:bg-black"} type={"button"}>
                                Sign In
                            </button>
                        </div>


                    </form>
                </div>
            </div>
        );
    }
}