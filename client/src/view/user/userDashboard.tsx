import React, {Component} from "react";
// @ts-ignore
import user from "../../assets/icons/user.png"
// @ts-ignore
import bg from "../../assets/images/galleryImg/img9.jpg"

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



export class UserDashboard extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            userData: "",
        };
    }
    componentDidMount() {
        // @ts-ignore
        // @ts-ignore
        // @ts-ignore
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
                // @ts-ignore
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({userData: data.data});
                // if(data.status == "ok"){
                //     alert("Login Successful")
                // // @ts-ignore
                // window.localStorage.setItem("token", data.data);
                // window.location.href="/userDashboard";
                // }
            });
    };

    logOut=() => {
        window.localStorage.clear();
        window.location.href="/login";
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
        const {userData} = this.state;
        return (
            // <div className={"text-black justify-center items-center p-20"}>
            //
            //    Name
            //     <h1 className={"font-bold text-xl"}>{userData.name}</h1>
            //     Email
            //     <h1 className={"font-bold text-xl"}>{userData.email}</h1><br/>
            //     <button onClick={this.logOut} className={"border-2 bg-gray-400 p-2 border-black"}>Log Out</button>
            // </div>
        <div className={"px-10"}>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={user} alt={''}/>
                        <span className="ml-3 text-xl">Hi ! </span>
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

            <section id={"home"} className="text-gray-600 body-font">
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
                            <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom
                                neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
                                bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
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
            <section id={"products"} className="text-gray-600 body-font">
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

        {/*Services*/}
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
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four
                                        dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four
                                        dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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
                                    <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four
                                        dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
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

        {/*Exlusive deals*/}
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
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
                        <img className="object-cover object-center rounded w-[650px] h-[550px]" alt="hero"
                             src={exclusive}/>

                    </div>
                </div>
            </section>

        {/*Testimonalas*/}
            <section id={"testimonials"} className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-20 h-20 mb-8  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                     src={person1}/>
                                    <p className="leading-relaxed">Nike has been my go-to for as long as I can remember.
                                        The quality, the innovation, the style – it’s unmatched. From the basketball
                                        court to the streets, Nike is a game-changer. Just do it, and you won’t regret
                                        it!.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        John D.</h2>
                                    <p className={"text-gray-500"}>Fitness Enthusiast</p>

                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-20 h-20 mb-8 object-fit: cover  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                     src={person2}/>
                                    <p className="leading-relaxed">Nike isn’t just sportswear; it’s a fashion statement.
                                        The versatility of their products lets me seamlessly transition from gym
                                        sessions to street style & fashion-forward approach keeps me on top of
                                        the game.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        Amanda R.</h2>
                                    <p className="text-gray-500">Young Athlete</p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 lg:mb-0 p-4">
                            <div className="h-full text-center">
                                <img alt="testimonial"
                                     className="w-20 h-20 mb-8 object-fit: cover  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                     src={person3}/>
                                    <p className="leading-relaxed">My sneaker collection is incomplete without Nike.
                                        The designs are next level, and the limited editions are a treasure. Every
                                        pair tells a story, and I’m proud to be part of the Nike legacy. Swoosh life
                                        forever!</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        Carlos M.</h2>
                                    <p className="text-gray-500">Sneaker Head</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/*Footer*/}
            <footer className="text-white body-font bg-[#16191E]">
                <div
                    className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col text-white">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            {/*<div className={"w-10 h-10 text-white p-3 bg-coral-red rounded-full"}>*/}
                            {/*    <img className={"w-10 h-10 text-white p-3 bg-coral-red rounded-full"} src={nike} alt={''}/>*/}
                            {/*</div>*/}
                            <div className={"hover:bg-gray"}>
                                <img className={"w-12 h-12 text-white p-2 bg-white rounded-full "} src={nike} alt={''}/>
                            </div>

                            {/*<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor"*/}
                            {/*     stroke-linecap="round" stroke-linejoin="round" stroke-width="2"*/}
                            {/*     className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">*/}
                            {/*    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>*/}
                            {/*</svg>*/}
                            <span className="ml-3 text-xl">Tailblocks</span>
                        </a>
                        <p className="mt-2 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="ttext-white hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-white hover:text-gray-800">First Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-white hover:text-gray-800">Fourth Link</a>
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
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
               viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5"
               viewBox="0 0 24 24">
            <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
               className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className="ml-3 text-gray-100">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0"
               className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
                    </div>
                </div>
            </footer>

        </div>
        );
    }

}

