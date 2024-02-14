import React, {Component} from "react";
// @ts-ignore
import spanish from "../../../assets/products/spinach.webp";
// @ts-ignore
import tomato from "../../../assets/products/tomato.webp";
// @ts-ignore
import beans from "../../../images/products/beans.jpg";

// @ts-ignore
import arrowRight from "../../../assets/icons/arrow-right.svg"

// @ts-ignore
import shoe from "../../../assets/products/bg-shoes2.jpg"
// @ts-ignore
import background2 from "../../../assets/images/bg2.webp"

import {Services} from "../../common/Services/Services";
import {Testimonial} from "../../common/Testimonial/Testimonial";
import {GiftContent} from "../../common/Gift/GiftContent";

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


export class Home extends Component {

    render() {

        // @ts-ignore
        return (
            <>
                <section id='home'
                         className='w-full flex xl:flex-row flex-col justify-center min-h-[50vh] gap-20 max-container '
                >
                    <div className=' mt-10 max-xl:padding-x relative xl:w-2/5 flex flex-col justify-center items-start w-full '>
                        <p className='text-2xl font-montserrat text-coral-red'>
                            Our Summer collections
                        </p>

                        <h1 className='mt-10 font-palanquin text-7xl max-sm:text-[72px] max-sm:leading-[82px] font-bold -z-3 '>
                          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
                            The New Arrival
                          </span>
                          <br />
                            <span className='text-coral-red inline-block mt-5 mb-7'>Nike</span> Shoes
                        </h1>
                        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                            Discover stylish Nike arrivals, quality comfort, and innovation for
                            your active life.
                        </p>

                        <button className={"flex gap-2 text-[18px] text-white\n" +
                            "                                   bg-coral-red px-4 py-3 rounded-3xl mr-4\n" +
                            "                                   hover:bg-[#272c4a] font-bold"}>
                            <img src={arrowRight} alt='arrow right'  className={" ml-2 rounded-full bg-white w-5 h-5 "} />
                            Shop Now</button>
                    </div>

                    <div className='relative flex-1 flex justify-center items-center w-full'>
                        <img src={shoe} alt='bigShoe'  className={"flex sm:gap-8 gap-6 absolute ml-[55px] pb-[230px] h-[1000px]  w-[150vw] w-full"} />
                    </div>
                    <br/>

                </section>

                <section id={"brand"}>
                    <div className={"w-full h-96  mt-[150px]"}>
                        <div className={"relative"}>
                            {/*<h1>Hello</h1>*/}
                            <img src={background2} alt='background 2'  className={"absolute object-cover mix-blend-overlay"} />
                            <div className='flex justify-start items-start flex-wrap w-full  gap-16 pt-[120px] ml-[60px]'>
                                {statistics.map((stat, index) => (
                                    <div key={index}>
                                        <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                                        <p className='leading-8 font-montserrat text-gray ml-2'>
                                            {stat.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                <GiftContent/>

                <Services/>
                <Testimonial/>

            </>

        );
    }
}
