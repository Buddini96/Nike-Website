import {Component} from "react";
// @ts-ignore
import arrowRight from "../../../assets/icons/arrow-right.svg"
// @ts-ignore
import shoe2 from "../../../assets/products/aboutBg.jpg"

export class About extends Component {
    render() {
        return (
            <section className="flex justify-between items-center max-lg:flex-col gap-1 w-full max-container" id="about-us">
                <div className="flex flex-1 flex-col pb-48">
                    <h2 className='mt-5 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
                      <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 pb-5'>Discover
                          <span className='pl-4 text-coral-blue inline-block mb-3'>Premium </span>
                      </span>
                        <br />
                        <span className='text-coral-blue inline-block mt-3'>Footwear</span>
                    </h2>
                    <p className='mt-4 lg:max-w-lg info-text'>Explore Nike's world of top-tier sportswear and athletic footwear. Uncover high-quality products meticulously crafted to elevate both your athletic performance and style. Shop the latest collections and indulge in unbeatable comfort and fashion. Join the Nike community today.
                    </p>
                    <p className='mt-6 lg:max-w-lg info-text'>
                        Immerse yourself in our newest collections, delivering unparalleled comfort and unrivaled style. Become a part of the Nike community today and experience the pinnacle of sportswear excellence.
                    </p>

                    <button className={"mt-11 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat " +
                        "text-lgflex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg " +
                        "leading-none " + "leading-none bg-coral-red text-white border-coral-red rounded-full w-[200px]"}>
                        <img src={arrowRight} alt='arrow right'  className={"ml-1 rounded-full bg-white w-5 h-5"} />
                        View </button>
                    
                </div>

                <div className="flex-1 flex justify-center items-center rounded-md">
                    {/*bg-gradient-to-r from-blue-200 to-green-100*/}
                    <img src={shoe2} alt="shoe8"  className='object-contain rounded-md w-[80%] h-min-[1%]' />
                </div>

            </section>
        );
    }
}