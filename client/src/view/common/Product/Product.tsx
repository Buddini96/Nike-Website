import {Component} from "react";
// @ts-ignore
import spanish from "../../../images/products/spinach.webp";
import {ModifyCart} from "../ModifyCart/ModifyCart";
// @ts-ignore
import arrowRight from "../../../images/icons/arrow-right.svg"

interface ProductProps {
    data: any
}

interface ProductState {
    isActive: boolean
}

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

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
            <section className={"w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"} id={"home"}>
                <div className={"relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28"}>
                    <p className={"text-xl font-montserrat text-coral-red"}>
                        Our Summer Collections
                    </p>
                    <h1 className={"mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold"}>
                        <span className={"xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"}>
                            The New Arrival
                        </span>
                        <br />
                        <span className={"text-coral-red inline-block mt-3"}>Nike</span>Shoes
                    </h1>
                    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                        Discover stylish Nike arrivals, quality comfort, and innovation for
                        your active life.
                    </p>

                    <button className={"flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-[200px]"}>
                        <img src={arrowRight} alt='arrow right'  className={"ml-2 rounded-full bg-white w-5 h-5"} />
                        Shop Now</button>

                    <div className={"flex justify-start items-start flex-wrap w-full mt-20 gap-16"}>
                        {statistics.map((stat, index) => (
                            <div key={index}>
                                <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
                                <p className='leading-7 font-montserrat text-slate-gray'>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
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
                {/*            <h3 className="text-[12px] pl-2 font-bold">{data.price} <small className={"text-[5px]"}>*/}
                {/*            </small>{data.currency}</h3>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className={"flex justify-center pt-3 font-bold"}>*/}
                {/*        {*/}
                {/*            this.state.isActive ?*/}
                {/*               <ModifyCart  data={{product: data, isAdded: this.state.isActive}}/> :*/}
                {/*                <button className={"w-full mt p-[3px] text-[12px] bg-green-600 p-5 text-white hover:text-black"}*/}
                {/*                        onClick={this.AddToCartOnClick}>Add to Cart</button>*/}
                {/*        }*/}
                {/*    </div>*/}
                {/*</div>*/}



            </section>
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