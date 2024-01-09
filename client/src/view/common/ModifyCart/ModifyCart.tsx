import {Component} from "react";
import {CartItem} from "../../../model/CartItem";


interface ModifyCartProps {
    data: any
}

interface ModifyCartState {
    itemCount: number
}

export class ModifyCart extends Component<ModifyCartProps, ModifyCartState> {

    public static itemList:CartItem[] = [];

    constructor(props: ModifyCartProps) {
        super(props);
        this.state = {
            itemCount: 1
        }
    }

    componentDidMount() {
        const {itemCount} = this.state;
        //Remove duplication
        if(this.props.data.isAdded){
            if(!ModifyCart.itemList.find(item => item.product.id === this.props.data.product.id)){
                ModifyCart.itemList.push({product: this.props.data.product, itemCount: itemCount})
            }

        }
        console.log(ModifyCart.itemList);
    }

    componentDidUpdate(prevProps: Readonly<ModifyCartProps>, prevState: Readonly<ModifyCartState>, snapshot?: any) {
        let {itemCount} = this.state;
        let item = ModifyCart.itemList.find(item => item.product.id === this.props.data.product.id);

        // @ts-ignore
        let index = ModifyCart.itemList.indexOf(item);
        ModifyCart.itemList.splice(index, 1);
        ModifyCart.itemList.push({
                product:this.props.data.product, itemCount: itemCount
            }
        )
    }

    render() {

        let {itemCount} = this.state;

        const onDecreaseItemCount =() :void => {
            // alert("remove")
            if(itemCount > 1 ){
                this.setState({itemCount: --itemCount})
            }else {
                alert("Item Count can't be less than 1")
            }
        }

        const onIncreaseItemCount =() :void => {
            // alert("Add")
            this.setState({itemCount: ++itemCount})
        }
        return (
            <div className={"w-full mt-1 p-[2.4px] bg-gradient-to-r from-coral-red to-purple-400 text-center font-[20px] rounded-md"}>
                {/*w-full bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-black font-medium text-center*/}
                {/*w-full mt-1 p-[2.4px] bg-green-600 text-center text-[12px]*/}
                <button className={"float-left font-[20px] bg-teal-400 rounded-md h-8 w-9 font-bold"}
                        onClick={onDecreaseItemCount}>
                    -</button>
                <small className={"text-[17px] font-bold p-1"}>
                    {/*1*/}
                    {itemCount}
                </small>
                <button className={"float-right font-[20px] bg-teal-400 rounded-md h-8 w-9 font-bold"}
                        onClick={onIncreaseItemCount}>
                    +</button>
            </div>
        );
    }
}