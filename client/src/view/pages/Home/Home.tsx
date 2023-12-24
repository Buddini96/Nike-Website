import {Component} from "react";
// @ts-ignore
import spanish from "../../../images/products/spinach.webp";
// @ts-ignore
import tomato from "../../../images/products/tomato.webp";
// @ts-ignore
import beans from "../../../images/products/beans.jpg";
import {Product} from "../../common/Product/Product";
// @ts-ignore
import arrowRight from "../../../images/icons/arrow-right.svg"

// @ts-ignore
import shoe from "../../../images/products/big-shoe1.png"

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];


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
        // @ts-ignore
        return (
            <>
                <section id='home'
                         className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
                >
                    <div className='  max-xl:padding-x relative xl:w-2/5 flex flex-col justify-center items-start w-fullpt-28'>
                        <p className='text-xl font-montserrat text-coral-red'>
                            Our Summer collections
                        </p>

                        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
                            <br />
                            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
                        </h1>
                        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
                            Discover stylish Nike arrivals, quality comfort, and innovation for
                            your active life.
                        </p>

                        <button className={"flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white border-coral-red rounded-full w-[200px]"}>
                            <img src={arrowRight} alt='arrow right'  className={"ml-2 rounded-full bg-white w-5 h-5"} />
                            Shop Now</button>

                        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
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

                    <div className='relative flex-1 flex justify-center items-center '>
                        <img src={shoe} alt='bigShoe'  className={"flex sm:gap-3 gap-2 absolute xs:right-[60%] pb-[50px]"} />
                    </div>
                </section>

                <div className={"flex"}>
                    <div className="relative h-32 w-32 ...">
                        <div className="absolute inset-y-0 right-0 w-16 ...">06</div>
                    </div>
                    {/*<div className={"flex"}>*/}
                    {/*    <img src={shoe} alt='bigShoe'  className={"w-[610px] h-[502px] absolute inset-3 right-[0px] "} />*/}
                    {/*</div>*/}
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
            </>

        );
    }
}