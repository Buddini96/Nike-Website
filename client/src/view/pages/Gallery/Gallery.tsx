import {Component} from "react";
// @ts-ignore
import img1 from "../../../assets/images/galleryImg/img6.jpg"
// @ts-ignore
import img2 from "../../../assets/images/galleryImg/img37.jpg"
// @ts-ignore
import img3 from "../../../assets/images/galleryImg/img3.jpg"
// @ts-ignore
import img4 from "../../../assets/images/galleryImg/img25.jpg"
// @ts-ignore
import img5 from "../../../assets/images/galleryImg/img5.jpg"
// @ts-ignore
import img6 from "../../../assets/images/galleryImg/img36.jpg"
// @ts-ignore
import img7 from "../../../assets/images/galleryImg/img7.jpg"
// @ts-ignore
import img8 from "../../../assets/images/galleryImg/img8.jpg"
// @ts-ignore
import img9 from "../../../assets/images/galleryImg/img9.jpg"
// @ts-ignore
import img10 from "../../../assets/images/galleryImg/img20.jpg"
// @ts-ignore
import img11 from "../../../assets/images/galleryImg/cc.jpg"
// @ts-ignore
import img12 from "../../../assets/images/galleryImg/img12.jpg"
// @ts-ignore
import img13 from "../../../assets/images/galleryImg/img22.jpg"

// @ts-ignore
import img14 from "../../../assets/images/galleryImg/img35.jpg"
// @ts-ignore
import img15 from "../../../assets/images/galleryImg/img23.jpg"
// @ts-ignore
import img16 from "../../../assets/images/galleryImg/jk.jpg"
// @ts-ignore
import img17 from "../../../assets/images/galleryImg/img17.jpg"
// @ts-ignore
import img18 from "../../../assets/images/galleryImg/img21.jpg"
// @ts-ignore
import img19 from "../../../assets/images/galleryImg/img19.jpg"
// @ts-ignore
import img20 from "../../../assets/images/galleryImg/img15.jpg"





export class Gallery extends Component {
    render() {
        return (
            <div className={"p-s md:p-10 rounded-3xl"}>
                <div className={"columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 " +
                    "[&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 roun rounded-3xl"}>
                    <img className={"rounded-2xl"} src={img1}/>
                    <img className={"rounded-2xl"} src={img2}/>
                    <img className={"rounded-2xl"} src={img3}/>
                    <img className={"rounded-2xl"} src={img4}/>
                    <img className={"rounded-2xl"} src={img5}/>
                    <img className={"rounded-2xl"} src={img6}/>
                    <img className={"rounded-2xl"} src={img7}/>
                    <img className={"rounded-2xl"} src={img8}/>
                    <img className={"rounded-2xl"} src={img9}/>
                    <img className={"rounded-2xl"} src={img10}/>
                    <img className={"rounded-2xl"} src={img11}/>
                    <img className={"rounded-2xl"} src={img12}/>
                    <img className={"rounded-2xl"} src={img13}/>
                    <img className={"rounded-2xl"} src={img14}/>
                    <img className={"rounded-2xl"} src={img15}/>
                    <img className={"rounded-2xl"} src={img16}/>
                    <img className={"rounded-2xl"} src={img17}/>
                    <img className={"rounded-2xl"} src={img18}/>
                    <img className={"rounded-2xl"} src={img19}/>
                    <img className={"rounded-2xl"} src={img20}/>
                    </div>
                </div>
        );
    }
}