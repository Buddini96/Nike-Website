import {Component} from "react";
// @ts-ignore
import logo from '../../../images/header-logo.svg';
// @ts-ignore
import hamburger from "../../../images/hamburger.svg"
import {Link} from "react-router-dom";
// @ts-ignore
import cart from "../../../images/icons/bag-shopping-solid.svg"
// @ts-ignore
import favourites from "../../../images/icons/heart-regular.svg"
// @ts-ignore


export class Navbar extends Component {
    render() {
        // @ts-ignore
        return (
        <header className={"padding-x py-5 absolute z-10 w-full"}>
            <nav className='flex justify-between items-center max-container'>
            <img className={"w-[129px] h-[29px] m-3 ml-[80px]"} src={logo} alt={''}></img>

            <ul className={"flex-1 flex justify-center items-center gap-8 ml-[200px] max-lg:hidden"}>
                <li className={"inline-block mr-3 text-[18px] "}>
                    <Link to={'/'}>Home</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] "}>
                    <Link to={'/about'}>About Us</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] "}>
                    <Link to={'/images'}>Products</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] "}>
                    <Link to={'/contact'}>Contact Us</Link>
                </li>
                <li className={"inline-block mr-3 text-[18px] "}>
                    <Link to={'/ShoppingCart'}>MyCart</Link>
                </li>
            </ul>

            <button >
                <img src={favourites} alt='cart icon'  className={"w-[40px] h-[40px] pr-5"} />

            </button>

            <button >

                <Link to={'/ShoppingCart'}>
                    <img src={cart} alt='cart icon'  className={"w-[40px] h-[40px] pr-5"} />
                </Link>
            </button>

            <button className="text-[18px] text-white
                                   bg-coral-red pl-5 pr-5 pt-2 pb-2 rounded-3xl mr-5
                                   hover:text-black font-bold" >
                <Link to={'/login'}>Sign In</Link>
            </button>


                <div className='hidden max-lg:block mr-5'>
                    <img src={hamburger} alt='hamburger icon'  className={"w-[25px] h-[25px]"} />
                </div>
            </nav>
        </header>
        );
    }

    onBtnClick = () => {
        alert("Button Clicked")
    }


}