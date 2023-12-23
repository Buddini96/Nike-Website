import {Component} from "react";
import {CartItem} from "../../../model/CartItem";

interface  ShoppingCartProps {
    itemList: CartItem[];
}
export class ShoppingCart extends Component<ShoppingCartProps> {
    render() {
        return (
            <div className={"flex justify-center items-center min-h-full"}>
                <table className={"w-full mx-6"}>
                    <tr className={"bg-green-600"}>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}>Id</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}>Name</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}>Unit Price</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}>Quantity</th>
                        <th className={"text-[15px] font-normal border-black border-[0.5px] px-1"}>Total Price</th>
                    </tr>

                    {
                        this.props.itemList.length === 0 ?
                            <tr>
                                <td colSpan={5} className={"border-black border-[0.5px] px-1"}>
                                    <p className={"text-center text-[15px]"}>No items to display</p>
                                </td>
                            </tr>
                            : this.props.itemList.map((item) => (
                                <tr className={"border-black border-[0.5px] px-1"}>
                                    <td className={"text-[15px] border-black border-[0.5px] px-1"}>{item.product.id}</td>
                                    <td className={"text-[15px] border-black border-[0.5px] px-1"}>{item.product.name}</td>
                                    <td className={"text-[15px] border-black border-[0.5px] px-1"}>{item.product.price + '' + item.product.currency}</td>
                                    <td className={"text-[15px] border-black border-[0.5px] px-1"}>{item.itemCount}</td>
                                    <td className={"text-[15px] border-black border-[0.5px] px-1"}>{(item.product.price * item.itemCount) + '' + item.product.currency}</td>
                                </tr>
                            ))
                    }
                </table>
            </div>
        );
    }
}