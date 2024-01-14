import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/Home/Home";
import {About} from "../../pages/About/About";
import {Images} from "../../pages/Images/Images";
import {Contact} from "../../pages/Contact/Contact";
import {Gallery} from "../../pages/Gallery/Gallery";
import {ShoppingCart} from "../../pages/ShoppingCart/ShoppingCart";
import {ModifyCart} from "../../common/ModifyCart/ModifyCart";

export class AdminMainContent extends Component {
    render() {
        return (
            <div className={""}>

                {/*<h1>Hello Admin</h1>*/}
                <Routes>
                    {/*<Route path="/" Component={Home}></Route>*/}
                    {/*<Route path="/About" Component={About}></Route>*/}
                    {/*<Route path="/Images" Component={Images}></Route>*/}
                    {/*<Route path="/Contact" Component={Contact}></Route>*/}
                    {/*<Route path="/Gallery" Component={Gallery}></Route>*/}
                    {/*<Route path="/ShoppingCart" element={<ShoppingCart itemList={ModifyCart.itemList} />}></Route>*/}
                </Routes>

            </div>
        );
    }
}
