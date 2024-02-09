import {Component} from "react";
// @ts-ignore
import gift1 from '../../../assets/images/Gifts/gift1.png'
// @ts-ignore
import gift2 from '../../../assets/images/Gifts/gift4.jpg'
// @ts-ignore
import gift3 from '../../../assets/images/Gifts/gift5.jpg'
export class GiftContent extends Component {
    render() {
        return (
            <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Give
                                the Perfect Gift</h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Unwrap Greatness: Elevate every
                                step with the perfect gift from Nike. Find the ultimate blend of style and performance
                                for the ones who inspire greatness. Step into the perfect present today!</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery"
                                         className="absolute inset-0 w-full h-full object-cover object-center"
                                         src={gift1}/>
                                        <div
                                            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
                                            bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium
                                            text-indigo-500 mb-1">THE
                                                BEST OF NIKE</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">It's
                                                Better as a Member</h1>
                                            <p className="leading-relaxed" >Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Accusamus adipisci deserunt facilis id incidunt.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery"
                                         className="absolute inset-0 w-full h-full object-cover object-center"
                                         src={gift2}/>
                                        <div
                                            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white
                                            opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium
                                            text-indigo-500 mb-1">MEMBER
                                                PRODUCT</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Your
                                                Exclusive Access</h1>
                                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Accusamus adipisci deserunt facilis id incidunt.</p>
                                        </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 sm:w-1/2 p-4">
                                <div className="flex relative">
                                    <img alt="gallery"
                                         className="absolute inset-0 w-full h-full object-cover object-center"
                                         src={gift3}/>
                                        <div
                                            className="px-8 py-10 relative z-10 w-full border-4 border-gray-200
                                            bg-white opacity-0 hover:opacity-100">
                                            <h2 className="tracking-widest text-sm title-font font-medium
                                            text-indigo-500 mb-1">MEMBER
                                                REWARDS</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">How we say
                                                Thank you</h1>
                                            <p className="leading-relaxed">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Accusamus adipisci deserunt facilis id incidunt.</p>
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
