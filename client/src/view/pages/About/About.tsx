import {Component} from "react";

export class About extends Component {
    render() {
        return (
            <>
                {/*<h1 className={"text-center text-red-800 font-bold"}>This is About Component</h1>*/}
                <div className={"flex"}>
                    <div className={"h-auto pt-5 pl-10 pr-10 mx-auto"}>
                        <h2 className={"text-3xl text-green-900 underline decoration-2"}>About Us</h2>
                        <p className={"text-[16px] pb-3 text-black"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Architecto aut impedit laborum necessitatibus obcaecati qui quod sequi sunt vel! Architecto doloremque
                            enim error magni maxime modi neque? Aperiam iste laudantium minima molestiae nesciunt, nihil
                            soluta ullam velit vero voluptas. Aut ea facere fuga incidunt modi non nulla obcaecati sapiente voluptas.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, voluptatibus.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam culpa deserunt dolorem, enim modi nemo repellat repudiandae
                            <br/>
                            <br/>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam dolor dolores facere fugiat, ipsum,
                            labore laudantium libero modi mollitia nesciunt possimus quidem. Ad alias, aspernatur aut beatae corporis cum
                            dolorum eum illum labore maiores necessitatibus non quas suscipit tempora tempore tenetur vel voluptas. Aliquam,
                            cum earum esse facilis, hic incidunt ipsum libero necessitatibus nemo neque nostrum obcaecati officiis pariatur
                            quae quibusdam quis quos similique sit sunt vitae voluptas voluptate voluptates.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}