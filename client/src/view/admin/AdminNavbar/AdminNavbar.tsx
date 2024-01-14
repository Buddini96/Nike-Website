import {Component} from "react";
// @ts-ignore
import nikelogo from "../../../assets/icons/nikeLogo.png"
import {ChevronUpIcon} from "@heroicons/react/24/outline";

export class AdminNavbar extends Component {
    render() {

        return (
            // <aside className={"h-screen"}>
            //     <nav className={"h-full flex flex-col bg-white border-r shadow-sm"}>
            //         <div className={"p-4 pb-2 flex justify-between items-center"}>
            //             <img src={nikelogo} className={"w-15 h-10"}/>
            //             <button className={"p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"}>
            //                 {/*<ChevronUpIcon></ChevronUpIcon>*/}
            //             </button>
            //         </div>
            //         <ul className={"flex-1 px-3 bg-yellow-100"}></ul>
            //     </nav>
            // </aside>
            <div className={"relative flex min-h-screen"}>

            {/*Sidebar*/}
                <div className={"bg-red-600 w-64"}>Side bar</div>
            {/*Main content*/}
                <div>
                    {/*header*/}
                    <div>Header</div>
                    {/*content*/}
                    <div>content</div>
                </div>
            </div>
        );
    }
}
