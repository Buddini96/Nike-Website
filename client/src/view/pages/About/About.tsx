import {Component} from "react";
// @ts-ignore
import arrowRight from "../../../assets/icons/arrow-right.svg"
// @ts-ignore
import shoe2 from "../../../assets/products/aboutBg.jpg"

export class About extends Component {
    render() {
        return (
            <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">
                {/*/!*<h1 className={"text-center text-red-800 font-bold"}>This is About Component</h1>*!/*/}
                {/*<div className={"flex"}>*/}
                {/*    <div className={"h-auto pt-5 pl-10 pr-10 mx-auto"}>*/}
                {/*        <h2 className={"text-3xl text-green-900 underline decoration-2"}>About Us</h2>*/}
                {/*        <p className={"text-[16px] pb-3 text-black"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.*/}
                {/*            Architecto aut impedit laborum necessitatibus obcaecati qui quod sequi sunt vel! Architecto doloremque*/}
                {/*            enim error magni maxime modi neque? Aperiam iste laudantium minima molestiae nesciunt, nihil*/}
                {/*            soluta ullam velit vero voluptas. Aut ea facere fuga incidunt modi non nulla obcaecati sapiente voluptas.*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus.*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa deserunt dolorem, enim modi nemo repellat repudiandae*/}
                {/*            <br/>*/}
                {/*            <br/>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolores facere fugiat, ipsum,*/}
                {/*            labore laudantium libero modi mollitia nesciunt possimus quidem. Ad alias, aspernatur aut beatae corporis cum*/}
                {/*            dolorum eum illum labore maiores necessitatibus non quas suscipit tempora tempore tenetur vel voluptas. Aliquam,*/}
                {/*            cum earum esse facilis, hic incidunt ipsum libero necessitatibus nemo neque nostrum obcaecati officiis pariatur*/}
                {/*            quae quibusdam quis quos similique sit sunt vitae voluptas voluptate voluptates.*/}
                {/*        </p>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="flex flex-1 flex-col">
                    <h2 className='mt-5 font-palanquin text-4xl capitalize lg:max-w-lg font-bold'>
          <span className=' xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>Discover <span className='text-coral-blue inline-block mb-3'>Premium </span>
          </span>
                        <br />
                        <span className='text-coral-blue inline-block mt-3'>Footwear</span>
                    </h2>
                    <p className='mt-4 lg:max-w-lg info-text'>Explore Nike's world of top-tier sportswear and athletic footwear. Uncover high-quality products meticulously crafted to elevate both your athletic performance and style. Shop the latest collections and indulge in unbeatable comfort and fashion. Join the Nike community today.
                    </p>
                    <p className='mt-6 lg:max-w-lg info-text'>
                        Immerse yourself in our newest collections, delivering unparalleled comfort and unrivaled style. Become a part of the Nike community today and experience the pinnacle of sportswear excellence.
                    </p>

                    <button className={"mt-11 flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lgflex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none " +
                        "leading-none bg-coral-red text-white border-coral-red rounded-full w-[200px]"}>
                        <img src={arrowRight} alt='arrow right'  className={"ml-2 rounded-full bg-white w-5 h-5"} />
                        View Details</button>
                    
                </div>

                <div className="flex-1 flex justify-center items-center rounded-md">
                    {/*bg-gradient-to-r from-blue-200 to-green-100*/}
                    <img src={shoe2} alt="shoe8" width={450} height={150} className='object-contain rounded-md' />
                </div>

            </section>
        );
    }
}