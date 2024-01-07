import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface  ShoppingCartProps {
    itemList: CartItem[];
}
export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className={" p-5 h-screen bg-gray-100"}>
                <h1 className={"text-xl mb-2 font-bold text-center pb-3"}>Your Orders</h1>
                <table className={"w-full"}>
                    <thead className={"bg-gray-50 border-b-2 border-gray-200"}>
                        <tr className={""}>
                            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>Id</th>
                            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>Name</th>
                            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>Unit Price</th>
                            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>Quantity</th>
                            <th className={"p-3 text-sm font-semibold tracking-wide text-left"}>Total Price</th>
                        </tr>
                    </thead>

                    {
                        this.props.itemList.length === 0 ?
                            <tr>
                                <td colSpan={5} className={""}>
                                    <p className={"text-center text-[15px]"}>No items to display</p>
                                </td>
                            </tr>
                            : this.props.itemList.map((item) => (
                                <tr className={"bg-white border-b-2"}>
                                    <td className={"p-3 text-sm text-gray-700"}>{item.product.id}</td>
                                    <td className={"p-3 text-sm text-gray-700"}>{item.product.name}</td>
                                    <td className={"p-3 text-sm text-gray-700"}>{item.product.price + '' + item.product.currency}</td>
                                    <td className={"p-3 text-sm text-gray-700"}>{item.itemCount}</td>
                                    <td className={"p-3 text-sm text-gray-700"}>{(item.product.price * item.itemCount) + '' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        );
    }
}