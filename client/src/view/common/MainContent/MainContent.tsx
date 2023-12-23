import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About/About";
import {Home} from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";
import {Images} from "../../pages/Images/Images";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";

export class MainContent extends Component {
    render() {
        return (
            // <div className={"pt-72 pb-72 text-center text-4xl text-amber-600 bg-amber-100 mx-auto"}>
            <div className={"pt-40 pb-40 pl-20 pr-20 mx-auto"}>
                {/*<h1 className={"text-center"}>This is Main Content</h1>*/}

                {/*<div className={"h-10 w-10 text-center text-2xl mx-auto p-10 bg-yellow-300 min-h-screen mx-auto mx-auto"}>*/}
                {/*/!*<div className={"h-20 w-10  text-center text-2xl pt-50 pb-50 bg-yellow-300 rotate-12 min-h-screen shadow-xl hover:shadow-red-600 !cursor-pointer mx-auto "}>*!/*/}
                {/*/!*<div className={"h-screen w-1/3 text-center text-2xl p-8 bg-yellow-600"}>*!/  /!*screen size height*!/*/}

                {/*    Width*/}
                {/*    /!*Height <br/>& <br/>Width*!/*/}
                {/*</div>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/About" Component={About}></Route>
                    <Route path="/Images" Component={Images}></Route>
                    <Route path="/Contact" Component={Contact}></Route>
                    <Route path="/ShoppingCart" element={<ShoppingCart itemList={ModifyCart.itemList} />}></Route>
                </Routes>

            </div>

        );
    }
}