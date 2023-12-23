import {Component} from "react";
import spanish from "../../../images/products/spinach.webp";
import {ModifyCart} from "../ModifyCart/ModifyCart";

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}



export class Product extends Component<ProductProps, ProductState> {

    public static itemsList: [];

    constructor(props: ProductProps) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    render() {
        const {data} = this.props;
        const image = require('../../../images/products/' + data.image)
        return (
            <>
                <div className={" w-40 h-50 mr-2 mb-5 justify-center items-center border-gray-500 border-[1px]"}>
                    <div>
                        <img src={image} alt={''}/>
                    </div>

                    <div className="flex">
                        <div>
                            <h3 className="text-secondary
                                               text-[12px] pl-4 font-bold pt-1.5">
                                {data.name}</h3>
                        </div>
                        <div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>
                            <h3 className="text-[12px] pl-2 font-bold">{data.price} <small className={"text-[5px]"}>
                            </small>{data.currency}</h3>
                        </div>
                    </div>
                    <div className={"flex justify-center pt-3 font-bold"}>
                        {
                            this.state.isActive ?
                               <ModifyCart  data={{product: data, isAdded: this.state.isActive}}/> :
                                <button className={"w-full mt p-[3px] text-[12px] bg-green-600 p-5 text-white hover:text-black"}
                                        onClick={this.AddToCartOnClick}>Add to Cart</button>
                        }


                    </div>
                </div>

            </>
        );
    }

    private AddToCartOnClick = ():void => {
        // alert("Button on click")
        this.setState({isActive: !this.state.isActive}, ():void => {
            console.log(this.state.isActive);
            // alert(this.state.isActive)
        })
    }
}