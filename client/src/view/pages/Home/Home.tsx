import {Component} from "react";
import spanish from "../../../images/products/spinach.webp";
import tomato from "../../../images/products/tomato.webp";
import beans from "../../../images/products/beans.jpg";
import {Product} from "../../common/Product/Product";

export class Home extends Component {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            data:[],
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('./product-data.json');
            const jsonData = await response.json();
            this.setState({data: jsonData})

        }catch (error){
            console.log("Error fetching data" , error)
        }
    }

    render() {

        // @ts-ignore
        const {data} = this.state;
        return (
            <div className={"flex"}>
                {/*<h1 className={"text-center  text-teal-800 font-bold"}>This is Home Component</h1>*/}
                <div className={"flex flex-wrap justify-center items-center mx-auto  mt-5 mb-3 mx-auto"}>

                    {/*<div className={" w-40 h-60   mr-2 mb-2 justify-center items-center border-gray-500 border-[1px] "}>*/}
                    {/*    <div>*/}
                    {/*        <img src={spanish} alt={''}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="flex">*/}
                    {/*        <div>*/}
                    {/*            <h3 className="text-secondary*/}
                    {/*                           text-[12px] pl-4 font-bold pt-1.5">*/}
                    {/*                Spinach</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>*/}
                    {/*            <h3 className="text-[12px] pl-2">200 <small className={"text-7px"}></small>LKR</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={"justify-center pt-3 "}>*/}
                    {/*        <button className={"w-full mt p-[2.5px] text-[12px] bg-green-600 p-3"}>Button</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={" w-40 h-60   mr-2 mb-2 justify-center items-center border-gray-500 border-[1px]"}>*/}
                    {/*    <div>*/}
                    {/*        <img className={"mt-8 mb-1.5"} src={tomato} alt={''}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="flex">*/}
                    {/*        <div>*/}
                    {/*            <h3 className="text-secondary*/}
                    {/*                           text-[12px] pl-4 font-bold pt-1.5">*/}
                    {/*                Tomatoes</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>*/}
                    {/*            <h3 className="text-[12px] pl-2">450 <small className={"text-7px"}></small>LKR</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={"justify-center pt-3 "}>*/}
                    {/*        <button className={"w-full mt p-[2.5px] text-[12px] bg-green-600 p-3"}>Button</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<div className={" w-40 h-60   mr-2 mb-2 justify-center items-center border-gray-500 border-[1px] "}>*/}
                    {/*    <div>*/}
                    {/*        <img src={beans} alt={''}/>*/}
                    {/*    </div>*/}

                    {/*    <div className="flex">*/}
                    {/*        <div>*/}
                    {/*            <h3 className="text-secondary*/}
                    {/*                           text-[12px] pl-4 font-bold pt-1.5">*/}
                    {/*                Beans</h3>*/}
                    {/*        </div>*/}
                    {/*        <div className={"bg-yellow-400 ml-1 p-1 rounded-lg pr-2"}>*/}
                    {/*            <h3 className="text-[12px] pl-2">200 <small className={"text-7px"}></small>LKR</h3>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className={"justify-center pt-3 "}>*/}
                    {/*        <button className={"w-full mt p-[2.5px] text-[12px] bg-green-600 p-3"}>Button</button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<Product></Product>*/}
                    {/*<Product></Product>*/}
                    {/*<Product></Product>*/}
                    {/*<Product></Product>*/}

                    {
                        data.map((product:any) => (
                            <Product key = {product.id} data = {product}/>
                        ))
                    }

                </div>

            </div>
        );
    }
}