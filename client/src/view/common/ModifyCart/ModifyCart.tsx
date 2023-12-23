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
            <div className={"w-full mt-1 p-[2.4px] bg-green-600 text-center text-[12px] "}>
                <button className={"float-left text-[12px] bg-yellow-300 rounded-lg h-5 w-7"}
                    onClick={onDecreaseItemCount}>
                    -</button>
                <small className={"text-[12px]"}>
                    {/*1*/}
                    {itemCount}
                </small>
                <button className={"float-right text-[12px] bg-yellow-300 rounded-lg h-5 w-7"}
                    onClick={onIncreaseItemCount}>
                    +</button>
            </div>
        );
    }
}