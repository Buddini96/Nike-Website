import React, {Component, useState} from "react";
// @ts-ignore
import {Footer} from "../common/Footer/Footer";
// @ts-ignore
import styles from '../../App.css'
// @ts-ignore
import user from "../../assets/icons/user.png"
// @ts-ignore
import bg from "../../assets/images/galleryImg/img9.jpg"
// @ts-ignore
import  footerLogo from "../../assets/icons/footer-logo.svg"

// @ts-ignore
import img1 from "../../assets/products/user/Nike City Classic.jpeg"
// @ts-ignore
import img2 from "../../assets/products/user/Nike Air Max Correlate.webp"
// @ts-ignore
import img3 from "../../assets/products/user/Nike Air Max Bolt.webp"
// @ts-ignore
import img4 from "../../assets/products/user/Nike Air Max 270.webp"
// @ts-ignore
import img5 from "../../assets/products/user/Nike Air Max Pulse Roam.webp"
// @ts-ignore
import img6 from "../../assets/products/user/Nike Air VaporMax Plus.webp"
// @ts-ignore
import img7 from "../../assets/products/user/Nike Air VaporMax Plus1.webp"
// @ts-ignore
import img8 from "../../assets/products/user/Nike jordan.webp"
// @ts-ignore
import delivery from "../../assets/icons/white-icons/delivery.png"
// @ts-ignore
import payment from "../../assets/icons/white-icons/payment.png"
// @ts-ignore
import support from "../../assets/icons/white-icons/trust.png"
// @ts-ignore
import exclusive from "../../assets/images/galleryImg/img13.jpg"

// @ts-ignore
import person1 from "../../assets/images/persons/person3.jpg"
// @ts-ignore
import person2 from "../../assets/images/persons/person5.jpg"
// @ts-ignore
import person3 from "../../assets/images/persons/person1.jpg"
// @ts-ignore
import nike from "../../assets/icons/nikeLogo.png"
// @ts-ignore
//import {AdminHome} from "../admin/AdminDashboard";
import {Link, Route} from "react-router-dom";
import {Testimonial} from "../common/Testimonial/Testimonial";
import {Services} from "../common/Services/Services";


// @ts-ignore
//import AdminHome from "../user/UserHome";
// @ts-ignore
//import userHome from "./userDashboard"



export class UserDashboard extends Component {

    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
            // admin: false,
        };
    }
    // componentDidMount() {
    //     //const [admin, setAdmin] = useState(false);
    //     // @ts-ignore
    //     const { admin, setAdmin} = useState(false);
    //     // const [admin, setAdmin] = useState(false);
    //     // @ts-ignore
    //     // @ts-ignore
    //     // @ts-ignore
    //     fetch("http://localhost:4001/userData", {
    //         method: "POST",
    //         // @ts-ignore
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //         },
    //         body: JSON.stringify({
    //             // @ts-ignore
    //             token: window.localStorage.getItem("token"),
    //         }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data, "userData");
    //             // this.setState({ admin});
    //             if(data.data.userType == "Admin"){
    //                 // @ts-ignore
    //                 setAdmin(true);
    //             }
    //             this.setState({userData: data.data});
    //             // if(data.status == "ok"){
    //             //     alert("Login Successful")
    //             // // @ts-ignore
    //             // window.localStorage.setItem("token", data.data);
    //             // window.location.href="/userDashboard";
    //             // }
    //         });
    //
    //     // const [isAdmin, setIsAdmin] = useState(true);
    //     // if (isAdmin) {
    //     //     // @ts-ignore
    //     //     return <Redirect to="/AdminDashboard" />;
    //     // } else {
    //     //     // @ts-ignore
    //     //     return <Redirect to="/userDashboard" />;
    //     // }
    // };

    componentDidMount() {
        fetch("http://localhost:4001/userData", {
            method: "POST",
            // @ts-ignore
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                // Update state using this.setState
                this.setState({ userData: data.data });

                if (data.data.userType == "Admin") {
                    //Update state using this.setState
                    this.setState({ admin: true });
                    window.location.href="/adminDashboard";
                }
            });
    };

    // return admin ? <AdminHome /> : <UserHome userData={userData} />;

    logOut=() => {
        window.localStorage.clear();
        window.location.href = "/login";
}


    // componentDidMount() {
    //     fetch("http://localhost:4001/userData", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
    //         },
    //         body: JSON.stringify({
    //             token: window.localStorage.getItem("token"),
    //         }),
    //     })
    //         .then((res) => {
    //             if (!res.ok) {
    //                 throw new Error(`HTTP error! Status: ${res.status}`);
    //             }
    //             return res.json();
    //         })
    //         .then((data) => {
    //             console.log(data, "userData");
    //             this.setState({userData: data.data});
    //             if (data.status === "ok") {
    //                 alert("Login Successful");
    //                 window.localStorage.setItem("token", data.data);
    //                 // Use react-router-dom for navigation instead of window.location.href
    //                 // @ts-ignore
    //                 this.props.history.push("/userDashboard");
    //             }
    //         })
    //         .catch((error) => {
    //             console.error("Fetch error:", error);
    //             // Handle the error appropriately, e.g., display an error message to the user
    //         });
    // };

    render() {
        // @ts-ignore
        const { admin } = this.state;
        // @ts-ignore
        const {userData} = this.state;
        //const [isAdmin, setIsAdmin] = useState(true);
        // @ts-ignore
       // const [admin, setAdmin] = useState(false);

        // if (admin) {
        //         // @ts-ignore
        //         return <Route path="/AdminDashboard" />;
        //     } else {
        //         // @ts-ignore
        //         return <Route path="/userDashboard" />;
        //     }



        return (
            // {admin ? (
            //         <Link to={"/AdminDashboard"}></Link>
            //
            //     ) : (
            //         // @ts-ignore
            //         <Link to={"/userDashboard"}></Link>
            //     )};
            // <div className={"text-black justify-center items-center p-20"}>
            //
            //    Name
            //     <h1 className={"font-bold text-xl"}>{userData.name}</h1>
            //     Email
            //     <h1 className={"font-bold text-xl"}>{userData.email}</h1><br/>
            //     <button onClick={this.logOut} className={"border-2 bg-gray-400 p-2 border-black"}>Log Out</button>
            // </div>


        <div className={""}>

                {/*{admin ? (*/}
                {/*    <Link to={"/AdminDashboard"}></Link>*/}
                {/*   */}
                {/*    ) : (*/}
                {/*    // @ts-ignore*/}
                {/*    <Link to={"/userDashboard"}></Link>*/}
                {/*    )};*/}

                    {/*// <AdminDashboard /> : <UserDashboard/>}*/}

            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={user} alt={''}/>
                        <span className="ml-3 text-xl">Hello ! </span>
                        <span className="ml-3 text-xl font-bold text-coral-red">{userData.name}</span>
                    </a>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <a href={"#home"} className="mr-5 hover:text-gray-900">Home</a>
                        <a href={"#products"} className="mr-5 hover:text-gray-900">Products</a>
                        <a href={"#services"} className="mr-5 hover:text-gray-900">Services</a>
                        <a href={"#testimonials"} className="mr-5 hover:text-gray-900">Testimonials</a>
                    </nav>
                    {/*<button onClick={this.logOut} className={"border-2 bg-gray-400 p-2 border-black"}>Log Out</button>*/}
                    <button
                        onClick={this.logOut} className="inline-flex items-center bg-coral-red border-0 p-2
                        focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">LogOut
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                             stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header>

            <section id={"home"} className="text-gray-600 body-font px-20">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                            <img className="object-cover object-center rounded w-[500px] h-[450px]" alt="hero"
                                 src={bg}/>

                        </div>
                        <div
                            className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left
                            items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lace-up and
                                ready to go!
                                <br className="hidden lg:inline-block"/>Thank you for joining us.
                                <br className="hidden lg:inline-block"/>Get ready to walk the talk of style.
                            </h1>
                            <p className="mb-8 leading-relaxed">Welcome to the journey! Lace-up and join us in the
                                world of style and performance. Thanks for choosing Nike – get ready to walk the talk
                                of style with every step you take! Unleash your potential and make every stride a
                                statement.</p>
                            <div className="flex justify-center">
                                <button
                                    className="inline-flex text-white bg-coral-red border-0 py-2 px-6
                                    focus:outline-none hover:bg-indigo-600 rounded text-lg">Shop
                                </button>
                                {/*<button*/}
                                {/*    className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6
                                focus:outline-none hover:bg-gray-200 rounded text-lg">Button*/}
                                {/*</button>*/}
                            </div>
                        </div>
                    </div>
                </section>

        {/*Products*/}
            <section id={"products"} className="text-gray-600 body-font px-20">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img1}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike City Classic</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img2}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Air Max Correlate</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img3}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Air Max Bolt</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img4}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Air Max 270</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img5}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Air Max Pulse Roam</h2>
                                    <p className="mt-1">$16.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img6}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Air VaporMax Plus</h2>
                                    <p className="mt-1">$21.15</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img7}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike VaporMax Plus</h2>
                                    <p className="mt-1">$12.00</p>
                                </div>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block w-[420px] h-[190px]"
                                         src={img8}/>
                                </a>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">ALL</h3>
                                    <h2 className="text-gray-900 title-font text-lg font-medium">Nike Jordan</h2>
                                    <p className="mt-1">$18.40</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            <div className="px-20">
                <Services/>
            </div>


        {/*Exlusive deals*/}
            <section className="text-gray-600 body-font px-20">
                <div className="flex flex-col text-center w-full mb-20">
                    <h2 className="text-sm text-coral-red tracking-widest font-medium title-font mb-1">Exclusive Deals,
                        Exclusively Yours</h2>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                        Seize the moment, step in style. Limited time, limitless possibilities!</h1>
                </div>
                <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center">
                    <div
                        className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                        mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold
                            out
                            <br className="hidden lg:inline-block"/>Exclusive Deals
                        </h1>
                        <p className="mb-8 leading-relaxed">"Dive into a world of exclusive deals on Nike shoes
                            – a premium showcase of cutting-edge designs and performance-enhancing footwear.
                            Elevate your style and step into savings with limited-time offers that redefine your
                            every stride."</p>
                        <div className="flex justify-center">
                            <button
                                className="inline-flex text-white bg-coral-red border-0 py-2 px-6 focus:outline-none
                                hover:bg-indigo-600 rounded text-lg">Explore
                            </button>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded w-[650px] h-[500px]" alt="hero"
                             src={exclusive}/>

                    </div>
                </div>
            </section>

            <div className="px-20">
                <Testimonial/>
            </div>


            <Footer/>

        </div>
        );
    }

}

