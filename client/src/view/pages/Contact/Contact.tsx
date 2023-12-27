import {Component} from "react";
// @ts-ignore
import shoeRed from "../../../images/products/shoeRed.jpg"
// @ts-ignore
import star from "../../../images/cardIcons/star.svg"
// @ts-ignore
import starHalfFill from "../../../images/cardIcons/star-half-fill.svg"
// @ts-ignore
import starNoFill from "../../../images/cardIcons/star-no-fill.svg"
// @ts-ignore
import favourite from "../../../images/cardIcons/love.svg"
// @ts-ignore
import eye from "../../../images/cardIcons/eye.svg"



export class Contact extends Component {
    render() {
        return (
            <section className={"h-screen bg-gray-100 flex items-center justify-center"}>

                {/*<h1 className={"text-center  text-blue-950 font-bold"}>This is Contact Component</h1>*/}
                {/*    <div className={"h-auto pl-10 mx-auto"}>*/}
                {/*        <div className={"p-2"}>*/}
                {/*            <h2 className={"text-3xl text-green-900 text-center underline decoration-2"}>Contact Us</h2>*/}

                {/*            <p className={"pb-3 text-12px pt-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, saepe!</p>*/}
                {/*        </div>*/}

                {/*        <form className={"h-auto p-2 justify-center"}>*/}
                {/*            <div className={"pb-2"}>*/}
                {/*                <label className={"text-12px pl-20"} htmlFor={""}>Your Email : </label>*/}
                {/*                <input className={"float-right border-[2px] border-green-700"} type={"email"}/>*/}
                {/*            </div>*/}

                {/*            <div className={"pb-2"}>*/}
                {/*                <label className={"text-12px pl-20"} htmlFor={""}>Your Subject : </label>*/}
                {/*                <input className={"float-right border-[2px] border-green-700"} type={"text"}/>*/}
                {/*            </div>*/}

                {/*            <div className={"pb-2"}>*/}
                {/*                <label className={"text-12px pl-20"} htmlFor={""}>Your Message : </label>*/}
                {/*                <textarea className={"float-right border-[2px] border-green-700"}/>*/}
                {/*            </div>*/}

                {/*            <div className={"mt-2 pl-20"}>*/}
                {/*                <button className={"p-5 bg-green-900 text-[14px] mt-5 rounded-3xl text-white font-bold hover:bg-black"} type={"button"}>*/}
                {/*                    Send Message*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*        </form>*/}
                {/*    </div>*/}

                <div className={"bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden"}>
                    <img src={shoeRed} alt='shoe4'  className={"w-full h-full object-cover"} />

                    <div className={"p-5 flex flex-col gap-3"}>
                    {/*    Badge*/}
                        <div className={"flex items-center gap-2"}>
                            <span className={"px-3 py-1 rounded-full text-xs bg-gray-100"}>stock ready</span>
                            <span className={"px-3 py-1 rounded-full text-xs bg-gray-100"}>official store</span>
                        </div>

                    {/*    Product title*/}
                        <h2 className={"font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap"}>
                            Best Nike Shoe
                        </h2>

                    {/*    product price*/}
                        <span className={"text-xl font-bold"}>
                            Rs. 56 000
                        </span>
                        <div className={"flex items-center gap-2 mt-1"}>
                            <span className={"text-sm line-through opacity-50"}>
                                Rs. 70 000
                            </span>
                            <span className={"bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white"}>
                                save 20%
                            </span>
                        </div>

                        {/*    product ratings*/}
                        <span className={"flex items-center mt-1"}>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={starHalfFill}/>
                            <img src={starNoFill}/>
                            <span className={"text-xs ml-2 text-gray-500"}>
                                20k reviews
                            </span>
                        </span>

                    {/*    product action button*/}
                        <div className={"mt-5 flex gap-2"}>
                            <button className={"bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wide transition"}>
                                Add to cart
                            </button>

                            <button className={"flex p-3 justify-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"}>
                                <img className={"opacity-50"}
                                     src={favourite} alt="add to favourites"/>
                            </button>

                            <button className={"flex p-3 justify-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"}>
                                <img className={"opacity-50"}
                                     src={eye} alt="add to favourites"/>
                            </button>
                        </div>
                    </div>
                </div>



            </section>
        );
    }
}