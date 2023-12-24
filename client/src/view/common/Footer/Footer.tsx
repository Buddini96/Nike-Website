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

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];

export const Footer = () => {
    return (
        <footer className='max-container'>
            <div className={"flex justify-between items-start gap-20 flex-wrap max-lg:flex-col bg-black"}>
                <div className='flex flex-col items-start'>
                {/*<p className="text[10px] text-[#e6f0e6]*/}
                {/*                  pl-2 hover:text-green-400 pt-1.5">*/}
                {/*    Copyright @ 2023</p>*/}

                {/*<h1 className={"text-2xl text-[#F3F8FF] pl-2 "}>Organic Shop</h1>*/}
                <img className={"m-0 w-[150px] h-[46px]"} src={footerLogo} alt={''}></img>
                    <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Get shoes ready for the new term at your nearest Nike store. Find
                        Your perfect Size In Store. Get Rewards
                    </p>
                    <div className={"flex items-center gap-5 mt-8"}>
                        {socialMedia.map((icon) => (
                            <div
                                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                                key={icon.alt}
                            >
                        {/*<img className={"m-0 w-[150px] h-[46px]"} src={facebook} alt={'facebook logo'}></img>*/}
                        {/*/!*<img className={"m-0 w-[150px] h-[46px]"} src={instagram} alt={'instagram logo'}></img>*!/*/}
                        {/*<img className={"m-0 w-[150px] h-[46px]"} src={twitter} alt={'twitter logo'}></img>*/}
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </div>
                            ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};