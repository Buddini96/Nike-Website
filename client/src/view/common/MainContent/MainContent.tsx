import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {About} from "../../pages/About/About";
import {Home} from "../../pages/Home/Home";
import {Contact} from "../../pages/Contact/Contact";
import {Images} from "../../pages/Images/Images";

import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../ModifyCart/ModifyCart";
import {Gallery} from "../../pages/Gallery/Gallery";

export class MainContent extends Component {
    render() {
        return (
            // <div className={"pt-72 pb-72 text-center text-4xl text-amber-600 bg-amber-100 mx-auto"}>
            <div className={"pt-40 pb-40 pl-20 pr-20 mx-auto"}>


                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/About" Component={About}></Route>
                    <Route path="/Images" Component={Images}></Route>
                    <Route path="/Contact" Component={Contact}></Route>
                    <Route path="/Gallery" Component={Gallery}></Route>
                    <Route path="/ShoppingCart" element={<ShoppingCart itemList={ModifyCart.itemList} />}></Route>
                </Routes>

            </div>

        );
    }
}