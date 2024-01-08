import {Component} from "react";
// @ts-ignore
import shoeRed from "../../../assets/products/shoeRed.jpg"
// @ts-ignore
import star from "../../../assets/cardIcons/star.svg"
// @ts-ignore
import starHalfFill from "../../../assets/cardIcons/star-half-fill.svg"
// @ts-ignore
import starNoFill from "../../../assets/cardIcons/star-no-fill.svg"
// @ts-ignore
import favourite from "../../../assets/cardIcons/love.svg"
// @ts-ignore
import eye from "../../../assets/cardIcons/eye.svg"
// @ts-ignore
import  facebook from "../../../assets/icons/white-icons/facebook.png"
// @ts-ignore
import  twitter from "../../../assets/icons/white-icons/twitter.png"
// @ts-ignore
import  instagram from "../../../assets/icons/white-icons/instagram.png"
// @ts-ignore
import  linkedin from "../../../assets/icons/white-icons/linkdin.png"




export class Contact extends Component {
    render() {
        // @ts-ignore
        // @ts-ignore
        return (
            <div className={"antialiased "}>
                <div className={"flex w-full justify-center items-center"}>
                    <div className={"mb-16 flex flex-col md:flex-row md:space-x-8 md:space-y-0 space-y-6 bg-coral-red " +
                        "w-full max-w-5xl sm:p-8 pt-5 pb-1 rounded-xl shadow-lg text-white overflow-hidden"}>
                        <div className={"flex flex-col space-y-8 justify-between "}>
                            <div>
                                <h1 className={"font-bold text-4xl"}>Contact Us</h1>
                                <p className={"pt-2 text-cyan-100 text-sm"}>Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Animi, cupiditate.</p>
                            </div>
                            {/*icons*/}
                            <div className={"flex flex-col space-y-6"}>
                                <div className={"inline-flex flex-1 space-x-2 items-center"}>
                                    <svg name={"call"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-300 text-xl">
                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                    </svg>
                                    <span>+(94) 76 886 1459</span>
                                </div>

                                <div className={"inline-flex flex-1 space-x-2 items-center"}>
                                    <svg name={"mail"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-300 text-xl">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                    <span>www.nike.com</span>
                                </div>

                                <div className={"inline-flex flex-1 space-x-2 items-center"}>
                                    <svg name={"location"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-teal-300 text-xl">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>
                                    <span>Sri Lanka</span>
                                </div>
                            </div>

                            <div className={"flex space-x-4 text-lg"}>
                                <img className={"h-6 w-6 m-1.5 pt-0.1 text-white"} src={facebook} alt={''}></img>
                                <img className={"h-6 w-6 m-1.5 pt-0.1 text-white"} src={twitter} alt={''}></img>
                                <img className={"h-6 w-6 m-1.5 pt-0.1 text-white"} src={instagram} alt={''}></img>
                                <img className={"h-6 w-6 m-1.5 pt-0.1 text-white"} src={linkedin} alt={''}></img>
                            </div>
                        </div>

                        <div className={"relative"}>
                            <div className={"absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-28 -top-28"}></div>
                            <div className={"absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-28 -bottom-16"}></div>
                            <div className={"relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-100"}>
                                <form className={"flex flex-col space-y-4"}>
                                    <div>
                                        <label className={"text-sm"} htmlFor={""}>Your Name : </label>
                                        <input placeholder={"Your Name"} className={"ring-1 ring-gray-300 w-full " +
                                            "rounded-md px-4 py-2 mt-2  px-4 outline-none focus:ring-2 " +
                                            "focus:ring-teal-300"} type={"text"}/>
                                    </div>

                                    <div>
                                        <label className={"text-sm"} htmlFor={""}>Email Address: </label>
                                        <input placeholder={"Your Email"} className={"ring-1 ring-gray-300 w-full " +
                                            "rounded-md px-4 py-2 mt-2 px-4 outline-none focus:ring-2 " +
                                            "focus:ring-teal-300"} type={"email"}/>
                                    </div>

                                    <div>
                                        <label className={"text-sm"} htmlFor={""}>Message : </label>
                                        <textarea placeholder={"Message"} rows={4} className={"ring-1 ring-gray-300 " +
                                            "w-full rounded-md px-4 py-2 mt-2 px-4 outline-none focus:ring-2 " +
                                            "focus:ring-teal-300"}/>
                                    </div>

                                    <button className={"inline-block self-end bg-coral-red text-white font-bold " +
                                        "rounded-md px-6 py-2 uppercase text-sm"}>Send Message</button>

                                </form>
                            </div>
                        </div>

                    {/*<div className={"p-2"}>*/}
                    {/*    <h2 className={"text-3xl text-green-900 text-center underline decoration-2"}>Contact Us</h2>*/}

                    {/*    <p className={"pb-3 text-12px pt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, saepe!</p>*/}
                    {/*</div>*/}

                    {/*<form className={"h-auto p-2 justify-center"}>*/}
                    {/*    <div className={"pb-2"}>*/}
                    {/*        <label className={"text-12px pl-20"} htmlFor={""}>Your Email : </label>*/}
                    {/*        <input className={"float-right border-[2px] border-green-700"} type={"email"}/>*/}
                    {/*    </div>*/}

                    {/*    <div className={"pb-2"}>*/}
                    {/*        <label className={"text-12px pl-20"} htmlFor={""}>Your Subject : </label>*/}
                    {/*        <input className={"float-right border-[2px] border-green-700"} type={"text"}/>*/}
                    {/*    </div>*/}

                    {/*    <div className={"pb-2"}>*/}
                    {/*        <label className={"text-12px pl-20"} htmlFor={""}>Your Message : </label>*/}
                    {/*        <textarea className={"float-right border-[2px] border-green-700"}/>*/}
                    {/*    </div>*/}

                    {/*    <div className={"mt-2 pl-20"}>*/}
                    {/*        <button className={"p-5 bg-green-900 text-[14px] mt-5 rounded-3xl text-white font-bold hover:bg-black"} type={"button"}>*/}
                    {/*            Send Message*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*</form>*/}
                    </div>
                </div>
            </div>
        );
    }
}