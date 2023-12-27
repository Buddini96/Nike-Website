import {Component} from "react";
// @ts-ignore
import spanish from "../../../images/products/spinach.webp";
import {ModifyCart} from "../ModifyCart/ModifyCart";
// @ts-ignore
import star from "../../../images/cardIcons/star.svg"
// @ts-ignore
import starHalfFill from "../../../images/cardIcons/star-half-fill.svg"
// @ts-ignore
import starNoFill from "../../../images/cardIcons/star-no-fill.svg"
// @ts-ignore
import favourite from "../../../images/cardIcons/love.svg"
// @ts-ignore
import eye from "../../../images/cardIcons/eye.svg"

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
                <div className={"bg-white text-gray-700 w-72 min-h-[10rem] shadow-lg rounded-md overflow-hidden"}>
                    <div>
                        <img src={image} alt={''}/>
                    </div>

                    <div className={"p-5 flex flex-col gap-3"}>
                        {/*    Badge*/}
                        <div className={"flex items-center gap-2"}>
                            <span className={"px-3 py-1 rounded-full text-xs bg-gray-100"}>stock ready</span>
                            <span className={"px-3 py-1 rounded-full text-xs bg-gray-100"}>official store</span>
                        </div>

                        {/*    Product title*/}
                        <div className={"flex mt-4"}>


                            <h2 className={"font-semibold text-2xl overflow-ellipsis overflow-hidden whitespace-nowrap"}>
                                {/*Best Nike Shoe*/}{data.name}
                            </h2>

                            {/*    product price*/}
                            <span className={"text-xl font-bold bg-yellow-400 ml-1 p-1 rounded-lg pl-2 pr-2"}>
                                {/*Rs. 56 000*/}{data.price}<small className={"pl-2"}>{data.currency}</small>
                            </span>




                        </div>
                        {/*<div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>*/}
                        {/*    <h3 className="text-[12px] pl-2 font-bold">{data.price}<small className={"text-[5px]"}>*/}
                        {/*    </small>{data.currency}</h3>*/}
                        {/*</div>*/}





                        <div className={"flex items-center gap-2 mt-1"}>
                            <span className={"text-sm line-through opacity-50"}>
                                Rs. 70 000
                            </span>
                            <span className={"bg-green-400 px-1.5 py-0.5 rounded-md text-xs text-white"}>
                                save 20%
                            </span>
                        </div>

                        {/*    product ratings*/}
                        <span className={"flex items-center mt-1"}>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={star}/>
                            <img src={starHalfFill}/>
                            <img src={starNoFill}/>
                            <span className={"text-xs ml-2 text-gray-500"}>
                                20k reviews
                            </span>
                        </span>

                        {/*    product action button*/}
                        <div className={"mt-5 flex gap-2 justify-center "}>
                            {
                                this.state.isActive ?
                                    <ModifyCart  data={{product: data, isAdded: this.state.isActive}}/> :
                                    <button className={"w-full bg-red-500/80 hover:bg-red-500/90 px-6 py-2 rounded-md text-white font-medium tracking-wide transition"}
                                            onClick={this.AddToCartOnClick}>Add to Cart</button>

                            }





                            <button className={"flex p-3 justify-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"}>
                                <img className={"opacity-50"}
                                     src={favourite} alt="add to favourites"/>
                            </button>

                            {/*<button className={"flex p-3 justify-center bg-gray-300/60 hover:bg-gray-300/80 transition rounded-md"}>*/}
                            {/*    <img className={"opacity-50"}*/}
                            {/*         src={eye} alt="add to favourites"/>*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>





                {/*<div className={" w-40 h-50 mr-2 mb-5 justify-center items-center border-gray-500 border-[1px]"}>*/}
                {/*    <div>*/}
                {/*        <img src={image} alt={''}/>*/}
                {/*    </div>*/}

                {/*    <div className="flex">*/}
                {/*        <div>*/}
                {/*            <h3 className="text-secondary*/}
                {/*                               text-[12px] pl-4 font-bold pt-1.5">*/}
                {/*                {data.name}</h3>*/}
                {/*        </div>*/}

                {/*        <div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>*/}
                {/*            <h3 className="text-[12px] pl-2 font-bold">{data.price}<small className={"text-[5px]"}>*/}
                {/*            </small>{data.currency}</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={"flex justify-center pt-3 font-bold"}>*/}
                {/*        {*/}
                {/*            this.state.isActive ?*/}
                {/*                <ModifyCart  data={{product: data, isAdded: this.state.isActive}}/> :*/}
                {/*                <button className={"w-full mt p-[3px] text-[12px] bg-green-600 p-5 text-white hover:text-black"}*/}
                {/*                        onClick={this.AddToCartOnClick}>Add to Cart</button>*/}
                {/*        }*/}


                {/*    </div>*/}
                {/*</div>*/}

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