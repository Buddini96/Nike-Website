import {Component} from "react";
// @ts-ignore
import img1 from "../../../assets/images/galleryImg/img1.jpg"
// @ts-ignore
import img2 from "../../../assets/images/galleryImg/img2.jpg"
// @ts-ignore
import img3 from "../../../assets/images/galleryImg/img3.jpg"
// @ts-ignore
import img4 from "../../../assets/images/galleryImg/img15.jpg"
// @ts-ignore
import img5 from "../../../assets/images/galleryImg/img5.jpg"
// @ts-ignore
import img6 from "../../../assets/images/galleryImg/img6.jpg"
// @ts-ignore
import img7 from "../../../assets/images/galleryImg/img7.jpg"
// @ts-ignore
import img8 from "../../../assets/images/galleryImg/img8.jpg"
// @ts-ignore
import img9 from "../../../assets/images/galleryImg/img9.jpg"
// @ts-ignore
import img10 from "../../../assets/images/galleryImg/img10.jpg"
// @ts-ignore
import img11 from "../../../assets/images/galleryImg/img11.jpg"
// @ts-ignore
import img12 from "../../../assets/images/galleryImg/img12.jpg"





export class Gallery extends Component {
    render() {
        return (
            <div className={"p-s md:p-10"}>
                <div className={"columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 " +
                    "[&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8"}>
                    <img src={img1}/>
                    <img src={img2}/>
                    <img src={img3}/>
                    <img src={img4}/>
                    <img src={img5}/>
                    <img src={img6}/>
                    <img src={img7}/>
                    <img src={img8}/>
                    <img src={img9}/>
                    <img src={img10}/>
                    <img src={img11}/>
                    <img src={img12}/>
                    </div>
                </div>
        );
    }
}