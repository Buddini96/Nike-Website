import {Component} from "react";

export class Contact extends Component {
    render() {
        return (
            <div className={"flex"}>
                {/*<h1 className={"text-center  text-blue-950 font-bold"}>This is Contact Component</h1>*/}
                    <div className={"h-auto pl-10 mx-auto"}>
                        <div className={"p-2"}>
                            <h2 className={"text-3xl text-green-900 text-center underline decoration-2"}>Contact Us</h2>

                            <p className={"pb-3 text-12px pt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, saepe!</p>
                        </div>

                        <form className={"h-auto p-2 justify-center"}>
                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Email : </label>
                                <input className={"float-right border-[2px] border-green-700"} type={"email"}/>
                            </div>

                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Subject : </label>
                                <input className={"float-right border-[2px] border-green-700"} type={"text"}/>
                            </div>

                            <div className={"pb-2"}>
                                <label className={"text-12px pl-20"} htmlFor={""}>Your Message : </label>
                                <textarea className={"float-right border-[2px] border-green-700"}/>
                            </div>

                            <div className={"mt-2 pl-20"}>
                                <button className={"p-5 bg-green-900 text-[14px] mt-5 rounded-3xl text-white font-bold hover:bg-black"} type={"button"}>
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>

            </div>
        );
    }
}