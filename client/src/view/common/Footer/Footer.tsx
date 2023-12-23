import logo from "../../../images/logo.png";

export const Footer = () => {
    return (
        // <div className={"p-4 bg-blue-300 bg-gradient-to-r from-blue-900 to-pink-900 "}> {/*gradiant right to left*/}
        //   <div className={"p-4 bg-blue-300 bg-gradient-to-br from-yellow-500 to-green-600 "}> {/*gradiant*/}
        <div className={"p-4 bg-[#14532d] flex justify-center"}>
        {/*<div className={"p-4 bg-blue-300/20 "}> /!*Opacity*!/*/}
        {/*    <h1 className={"pt-5 pb-50 text-4xl text-center text-blue-900"}>This is Footer</h1>*/}
            <p className="text[10px] text-[#e6f0e6]
                              pl-2 hover:text-green-400 pt-1.5">
                Copyright @ 2023</p>

            <h1 className={"text-2xl text-[#F3F8FF] pl-2 "}>Organic Shop</h1>
            <img className={"h-7 w-7 m-1.5 pt-0.1 "} src={logo} alt={''}></img>
        </div>
    );
};