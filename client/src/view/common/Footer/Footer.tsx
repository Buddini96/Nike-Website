// @ts-ignore
import logo from "../../../images/logo.png";
// @ts-ignore

import  footerLogo from "../../../images/icons/footer-logo.svg"
// @ts-ignore
import  facebook from "../../../images/icons/facebook.svg"
// @ts-ignore
import  instagram from "../../../images/icons/instagram.svg"
// @ts-ignore
import  twitter from "../../../images/icons/twitter.svg"
// @ts-ignore
import copyrightSign from "../../../images/icons/copyright-sign.svg"

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
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const Footer = () => {
    return (
        <footer className='max-container bg-black'>
            <div className='flex justify-between items-start gap-2 flex-wrap pt-16'>
                <div className='flex flex-col items-start pl-12'>
                    <a href='/'>
                        <img
                            src={footerLogo}
                            alt='logo'
                            width={150}
                            height={46}
                            className='m-0'
                        />
                    </a>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>

                    <div className='flex items-center gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            <div
                                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                                key={icon.alt}
                            >
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex flex-1 justify-between pr-12 flex-wrap pl-10'>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='font-montserrat text-2xl leading-normal font-medium mb-6 text-white pr-12 pl-12'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-3 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray pr-12 pl-12'
                                        key={link.name}
                                    >
                                        <a href={link.link}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center text-white-400 mt-24 max-sm:flex-col max-sm:items-center pr-5 '>
                <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
                    <img
                        src={copyrightSign}
                        alt='copyright sign'
                        width={20}
                        height={20}
                        className='rounded-full m-0'
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};