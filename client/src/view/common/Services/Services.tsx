import React, {Component} from "react";
// @ts-ignore
import delivery from "../../../assets/icons/white-icons/delivery.png"
// @ts-ignore
import payment from "../../../assets/icons/white-icons/payment.png"
// @ts-ignore
import support from "../../../assets/icons/white-icons/trust.png"

export class Services extends Component {
    render() {
        return (
            <>
                <section id={"services"} className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-sm text-coral-red tracking-widest font-medium title-font mb-1">Nike's
                                Services</h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                Innovation, Excellence, Ultimate Athletic Experience.</h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div
                                            className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full
                                        bg-coral-red text-white flex-shrink-0">
                                            <img className={"w-7 h-7"} src={delivery} alt={''}/>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Quick Delivery</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">Swift Stride: Quick delivery,
                                            faster style. Step into your new Nike gear in no time. Your journey starts
                                            now!</p>
                                        <a className="mt-3 text-coral-red inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                 stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                                 viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div
                                            className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full
                                        bg-coral-red text-white flex-shrink-0">
                                            <img className={"w-6 h-6"} src={payment} alt={''}/>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Payment Security</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">Shop with Confidence: Unmatched kicks,
                                            unparalleled security. Your stride to style is safeguarded with Nike –
                                            where payment security meets unmatched performance.</p>
                                        <a className="mt-3 text-coral-red inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                 stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                                 viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div
                                            className="w-10 h-10 mr-3 inline-flex items-center justify-center rounded-full
                                        bg-coral-red text-white flex-shrink-0">
                                            <img className={"w-6 h-6"} src={support} alt={''}/>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Dedicated Support</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">Your Victory, Our Priority: Dedicated
                                            support for every step. Experience unparalleled assistance on your journey
                                            to greatness with Nike. We've got your back, every stride of the way.</p>
                                        <a className="mt-3 text-coral-red inline-flex items-center">Learn More
                                            <svg fill="none" stroke="currentColor" stroke-linecap="round"
                                                 stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2"
                                                 viewBox="0 0 24 24">
                                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
