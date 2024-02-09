import React, {Component} from "react";
// @ts-ignore
import person1 from "../../../assets/images/persons/person3.jpg"
// @ts-ignore
import person2 from "../../../assets/images/persons/person5.jpg"
// @ts-ignore
import person3 from "../../../assets/images/persons/person1.jpg"

export class Testimonial extends Component {
    render() {
        return (
            <>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-sm text-coral-red tracking-widest font-medium title-font mb-1">Nike's
                                Testimonials</h2>
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
                                Empowered by Nike: Real stories, real victories. Just Do It, Just Testify.</h1>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial"
                                         className="w-20 h-20 mb-8  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                         src={person1}/>
                                    <p className="leading-relaxed">Nike has been my go-to for as long as I can remember.
                                        The quality, the innovation, the style – it’s unmatched. From the basketball
                                        court to the streets, Nike is a game-changer. Just do it, and you won’t regret
                                        it!.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        John D.</h2>
                                    <p className={"text-gray-500"}>Fitness Enthusiast</p>

                                </div>
                            </div>
                            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial"
                                         className="w-20 h-20 mb-8 object-fit: cover  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                         src={person2}/>
                                    <p className="leading-relaxed">Nike isn’t just sportswear; it’s a fashion statement.
                                        The versatility of their products lets me seamlessly transition from gym
                                        sessions to street style & fashion-forward approach keeps me on top of
                                        the game.</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        Amanda R.</h2>
                                    <p className="text-gray-500">Young Athlete</p>
                                </div>
                            </div>
                            <div className="lg:w-1/3 lg:mb-0 p-4">
                                <div className="h-full text-center">
                                    <img alt="testimonial"
                                         className="w-20 h-20 mb-8 object-fit: cover  object-cover object-center rounded-full inline-block
                                     border-2 border-gray-200 bg-gray-100 w-[150px] h-[150px]"
                                         src={person3}/>
                                    <p className="leading-relaxed">My sneaker collection is incomplete without Nike.
                                        The designs are next level, and the limited editions are a treasure. Every
                                        pair tells a story, and I’m proud to be part of the Nike legacy. Swoosh life
                                        forever!</p>
                                    <span className="inline-block h-1 w-10 rounded bg-coral-red mt-6 mb-4"></span>
                                    <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                                        Carlos M.</h2>
                                    <p className="text-gray-500">Sneaker Head</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}
