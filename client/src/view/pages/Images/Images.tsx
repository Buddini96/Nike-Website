import {Component} from "react";
import {Product} from "../../common/Product/Product";



export class Images extends Component {
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
            <section id='products' className='max-container max-sm:mt-12 '>
                <div className='flex flex-col  gap-5 mr-8 text-center'>
                    <h2 className='text-4xl font-palanquin font-bold text-center'>
                        Our <span className='text-coral-red'> Popular </span> Products
                    </h2>
                    <p className=' mt-2 font-montserrat text-slate-gray text-center'>
                        Experience top-notch quality and style with our sought-after
                        selections. Discover a world of comfort, design, and value
                    </p>
                </div>

                <div className={"flex"}>

                    <div className={"flex flex-wrap justify-center items-center mx-auto  mt-5 mb-3 mx-auto"}>

                        {
                            data.map((product:any) => (
                                <Product key = {product.id} data = {product}/>
                            ))
                        }

                    </div>

                </div>
            </section>
        );
    }
}