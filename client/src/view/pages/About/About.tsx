import {Component} from "react";
// @ts-ignore
import arrowRight from "../../../assets/icons/arrow-right.svg"
// @ts-ignore
// import shoe2 from "../../../assets/images/galleryImg/img14.jpg"
// @ts-ignore
import shoe2 from "../../../assets/products/aboutBg.jpg"

export class About extends Component {
    render() {
        return (
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-20 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Discover Premium
                            <br className="hidden lg:inline-block"/>Footwear
                        </h1>
                        <p className="mb-8 leading-relaxed"> Uncover high-quality products meticulously crafted to
                            elevate both your athletic performance and style. Shop the latest collections and indulge
                            in unbeatable comfort and fashion. Join the Nike community today.</p>
                        <p className="mb-8 leading-relaxed"> UImmerse yourself in our newest collections, delivering
                            unparalleled comfort and unrivaled style. Become a part of the Nike community today and
                            experience the pinnacle of sportswear excellence.</p>
                        <div className="flex justify-center">
                            {/*<button*/}
                            {/*    className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button*/}
                            {/*</button>*/}
                            {/*<button*/}
                            {/*    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button*/}
                            {/*</button>*/}
                            <button className={"inline-flex text-white border-0 py-2 px-7 " +
                                "focus:outline-none hover:bg-indigo-600 rounded text-lg rounded-2xl bg-coral-red gap-2 px-7 py-4"}>
                                <img src={arrowRight} alt='arrow right px-3'  className={"ml-1 rounded-full bg-white w-5 h-5"} />
                                View </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                        <img className="object-cover object-center rounded w-[520px] h-[420px]" alt="hero"
                             src={shoe2}/>
                    </div>
                </div>
            </section>
        );
    }
}
