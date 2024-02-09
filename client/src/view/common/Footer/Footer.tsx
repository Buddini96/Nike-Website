// @ts-ignore
import logo from "../../../assets/icons/logo.png";
// @ts-ignore

import  footerLogo from "../../../assets/icons/footer-logo.svg"
// @ts-ignore
import  facebook from "../../../assets/icons/facebook.svg"
// @ts-ignore
import  instagram from "../../../assets/icons/instagram.svg"
// @ts-ignore
import  twitter from "../../../assets/icons/twitter.svg"
// @ts-ignore
import copyrightSign from "../../../assets/icons/copyright-sign.svg"
import React from "react";

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Air Force 1", link: "/" },
            { name: "Air Max 1", link: "/" },
            { name: "Air Jordan 1", link: "/" },
            { name: "Air Force 2", link: "/" },
            { name: "Nike Waffle Racer", link: "/" },
            { name: "Nike Cortez", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@nike.com", link: "mailto:customer@nike.com" },
            { name: "Buddini Pathianyaka", link: "tel:+768861459" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className="text-white body-font bg-[#16191E]">
            <div
                className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-white">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        {/*<div className={"w-10 h-10 text-white p-3 bg-coral-red rounded-full"}>*/}
                        {/*    <img className={"w-10 h-10 text-white p-3 bg-coral-red rounded-full"} src={nike} alt={''}/>*/}
                        {/*</div>*/}
                        <div className={"hover:bg-gray"}>
                            <img className={"w-15 h-10"} src={footerLogo} alt={''}/>
                        </div>

                        {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"*/}
                        {/*     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                        {/*     className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">*/}
                        {/*    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>*/}
                        {/*</svg>*/}
                        <span className="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <p className="mt-2 text-sm text-gray-500">Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards</p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center cursor-pointer">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">RESOURSES</h2>
                        <nav className="list-none mb-10 cursor-pointer">
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Gift Cards</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Find A Store</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Become A member</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Site Feedbackk</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 cursor-pointer">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">HELP</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Get Help</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Order Status</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Shipping and Delivery</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Order Cancellation</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 cursor-pointer">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">COMPANY</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">About Nike</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">News</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Careers</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Sustainability</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4 cursor-pointer">
                        <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">PROMOTIONS & DISCOUNTS</h2>
                        <nav className="list-none mb-10 ">
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Student</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Military</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Teacher</a>
                            </li>
                            <li>
                                <a className="text-white-400 hover:text-slate-gray">Birthday</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="bg-[#16191E]">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Nike —
                        <a href="https://twitter.com/knyttneve" rel="noopener noreferrer"
                           className="text-gray-600 ml-1" target="_blank">@Nike</a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start px-4">
        <a className="text-gray-500 w-8 h-8 bg-white rounded-full hover:bg-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 ml-1 mt-1"
               viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-4 text-gray-500 w-8 h-8 bg-white rounded-full hover:bg-gray-400">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5 ml-1.5 mt-1.5"
               viewBox="0 0 24 24">
            <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-4 text-gray-500 w-8 h-8 bg-white rounded-full hover:bg-gray-400">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               className="w-6 h-6 ml-1 mt-1" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-4 text-gray-500 w-8 h-8 bg-white rounded-full hover:bg-gray-400">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
               className="w-5 h-5 ml-1.5 mt-1" viewBox="0 0 24 24">
            <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
                </div>
            </div>
        </footer>
    );
};
