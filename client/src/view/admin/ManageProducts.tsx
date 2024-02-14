import React, { useState, Component } from "react";
// @ts-ignore
import nike from "../../assets/icons/white-icons/nike.png"
// @ts-ignore
import adminPro from "../../assets/icons/admin.png"
import {faTrash, faXmark, faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ThemeProvider} from "@material-tailwind/react";
// @ts-ignore
import axios from "axios";

import value = ThemeProvider.propTypes.value;
import {data} from "autoprefixer";
import {SideDashboard} from "../common/SideDashboard/SideDashboard";

// @ts-ignore
// axios.defaults.baseUrl = "http://localhost:4001/";
const api = axios.create({
    baseURL: "http://localhost:4001/",
});


export class ManageProducts extends Component {
    // @ts-ignore
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            price: "",
            currency: "",
            image: "",
            userData: "",
            addSection: false,
            editSection: false,
            dataList: [],
            formData: {
                id: "",
                name: "",
                price: "",
                currency: "",
                image: "",
            },

            setFormDataEdit: {
                id: "",
                name: "",
                price: "",
                currency: "",
                image: "",
            },
            editData: {  // State to store data for editing
                id: '',
                name: '',
                price: '',
                currency: '',
                image: '',
            },

        };
        this.getFetchData = this.getFetchData.bind(this);
    }


    componentDidMount() {
        this.fetchUserData();
        this.getFetchData();
    }

    fetchUserData = () => {
        fetch("http://localhost:4001/userData", {
            method: "POST",
            // @ts-ignore
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({ userData: data.data });
            });
    };

    // @ts-ignore
    getFetchData = async () => {
        try {
            const data = await axios.get("http://localhost:4001/getAll");
            console.log(data);
            if (data.data.success) {
                this.setState({ dataList: data.data.data });

            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    logOut = () => {
        window.localStorage.clear();
        window.location.href = "/login";
    };

    // @ts-ignore
    render() {
        // @ts-ignore
        const {editSection, editData } = this.state;
        // @ts-ignore
        const {admin} = this.state;
        // @ts-ignore
        const {userData} = this.state;
        // @ts-ignore
        const {addSection} = this.state;
        // @ts-ignore
        //const {editSection} = this.state;
        // @ts-ignore
        let {setEditSection} = this.state;
        // @ts-ignore
        //const {formDataEdit, setFormDataEdit} = this.state;
        //     id: "",
        //     name: "",
        //     price: "",
        //     currency: "",
        //     image: "",
        // });

        // @ts-ignore
        let {setAddSection} = this.state;
        // @ts-ignore
        const {dataList} = this.state;
        // @ts-ignore
        const {setDataList} = this.state;
        // @ts-ignore

        // @ts-ignore
        //const {dataList, formData } = this.state;

        // @ts-ignore
        setAddSection = (value) => {
            this.setState({addSection: value});
        };

        // @ts-ignore
        // const getFetchData = async () => {
        //     try {
        //         const data = await axios.get("http://localhost:4001/getAll");
        //         console.log(data);
        //         if (data.data.success) {
        //             this.setState({ dataList: data.data.data });
        //         }
        //     } catch (error) {
        //         console.error("Error fetching data:", error);
        //     }
        // };

        // useEffect(()=>{
        //     getFetchData();
        // },[]);


        // @ts-ignore
        const handleSubmit = async (e) => {
            e.preventDefault()
            const data = await axios.post("http://localhost:4001/save", formData);
            console.log(data);
            if(data.data.success){
                setAddSection(false)
                // @ts-ignore
                alert(data.data.message);
                this.getFetchData();
            }
        }

        // @ts-ignore
        const handleUpdate = async (e) => {
            e.preventDefault();

            try {
                // @ts-ignore
                const data = await axios.put(`http://localhost:4001/update/${this.state.editData.id}`, this.state.editData);
                console.log(data);

                if (data.data.success) {
                    this.setState({ editSection: false });
                    alert(data.data.message);
                    this.getFetchData();
                }
            } catch (error) {
                console.error("Error updating product:", error);
                // Handle error or show a user-friendly message
            }
        };



        // @ts-ignore
        setEditSection = (id) => {
            this.setState({ editSection: id });
        };

        // @ts-ignore
        // const handleEditOnChange = async (e) => {
        //
        //     const {value, name} = e.target;
        //
        //     // @ts-ignore
        //     this.setState((prev) => ({
        //         setEditSection: {
        //             // @ts-ignore
        //             ...prev.formData,
        //             [name]: value,
        //         },
        //     }));
        // }

        const handleEditOnChange = async (e) => {
            const { name, value } = e.target;
            this.setState(prevState => ({
                editData: {
                    // @ts-ignore
                    ...prevState.editData,
                    [name]: value,
                },
            }));
        };


        // @ts-ignore
        const handleEdit =  (id) => {
            // // Set the editSection to true
            // this.setState({ editSection: true });
            //
            // // Set the data for the selected item in the form
            // this.setState({
            //     formDataEdit: {
            //         id: el.id,
            //         name: el.name,
            //         price: el.price,
            //         currency: el.currency,
            //         image: el.image,
            //     },
            // });

            // Find the product with the given id in dataList
            // @ts-ignore
            const selectedProduct = this.state.dataList.find(product => product._id === id);

            if (selectedProduct) {
                // Update the state with the data of the selected product
                this.setState({
                    editData: {
                        id: selectedProduct.id,
                        name: selectedProduct.name,
                        price: selectedProduct.price,
                        currency: selectedProduct.currency,
                        image: selectedProduct.image,
                    },
                    editSection: true,
                });
            }
        }

        // @ts-ignore
        const {formData} = this.state;
        // @ts-ignore
        const {formDataEdit} = this.state;

        // @ts-ignore
        const handleOnChange = (e) => {
            const {value, name} = e.target;

            // @ts-ignore
            this.setState((prev) => ({
                formData: {
                    // @ts-ignore
                    ...prev.formData,
                    [name]: value,
                },
            }));
        };

        // @ts-ignore
        const handleDelete = async (id) => {
            try {
                const data = await axios.delete(`http://localhost:4001/delete/${id}`);
                alert(data.data.message);

                if (data.data.success) {
                    this.getFetchData();
                }
                // Update the state or perform any other necessary actions after successful deletion
            } catch (error) {
                console.error("Error deleting product:", error);
                // Handle error or show a user-friendly message
            }
        };


        console.log(dataList);
            // @ts-ignore
            // @ts-ignore
        return (
                <>
                    <div className={"relative flex min-h-screen"}>

                        {/*Sidebar*/}

                        <SideDashboard/>
                        {/*Main content*/}
                        <div className={"flex-1"}>
                            {/*header*/}
                            <div
                                className={"flex justify-between items-center max-container text-cyan-700 font-extrabold bg-white shadow px-8 py-4"}>MANAGE
                                PRODUCTS
                                <div className={"flex justify-center items-center max-container ml-5"}>
                                <span className={"px-6"}>
                                    <div className={"bg-coral-red rounded-full w-11 h-11 "}>
                                        <img className={"w-10 h-10 items-center justify-center pl-1"} src={adminPro}/>
                                    </div>
                                </span>
                                    <span className="pr-3 text-xl text-black font-semibold">Hello  </span>
                                    <span className="pr-6 text-xl font-bold text-coral-red">{userData.name}</span>
                                </div>
                            </div>
                            {/*content*/}
                            {/*<div className={"p-8 text-cyan-700 font-extrabold"}>Manage Products</div>*/}
                            <div className={"p-9"}>
                                <div className={"container border-black p-[10px]  max-w-[700px] m-auto rounded-md"}>
                                    <button className={"bg-cyan-700 text-white p-1 rounded-md px-2"}
                                        // @ts-ignore
                                            onClick={() => this.setState({addSection: true})}>Add
                                    </button>

                                    {
                                        addSection && (
                                            <div
                                                className={"absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center"}>
                                                <form onSubmit={handleSubmit}
                                                      className={"h-auto p-2 justify-center bg-[#f1f5f9] p-9 items-center rounded-md shadow-2xl"}>
                                                    <FontAwesomeIcon
                                                        icon={faXmark}
                                                        onClick={() => this.setState({addSection: false})}
                                                        className={"ml-[320px] mb-[20px] cursor-pointer"}
                                                    />
                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5 p-5"} htmlFor={""}>Product Id
                                                            : </label>
                                                        <input className={"float-right border-[2px]  border-teal-700"}
                                                        name={"id"} type={"number"} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Name : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                        name={"name"} type={"text"} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Price : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                        name={"price"}  type={"number"} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Currency : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                        name={"currency"}  type={"text"} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Image : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                        name={"image"}  type={"text"} onChange={handleOnChange}/>
                                                    </div>

                                                    <div className={"mt-2 pl-20  w-full"}>
                                                        <button
                                                            className={"p-1 items-start  w-full bg-teal-700 text-[14px] mt-5 rounded-md text-white font-bold hover:bg-black"}
                                                            type={"submit"}>
                                                            Submit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }

                                    {
                                        editSection && (
                                            <div
                                                className={"absolute right-0 left-0 top-0 bottom-0 flex justify-center items-center"}>
                                                <form onSubmit={handleUpdate}
                                                      className={"h-auto p-2 justify-center bg-[#f1f5f9] p-9 items-center rounded-md shadow-2xl"}>
                                                    <FontAwesomeIcon
                                                        icon={faXmark}
                                                        onClick={() => this.setState({editSection: false})}
                                                        className={"ml-[320px] mb-[20px] cursor-pointer"}
                                                    />
                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5 p-5"} htmlFor={""}>Product Id
                                                            : </label>
                                                        <input className={"float-right border-[2px]  border-teal-700"}
                                                               name={"id"} type={"number"} value={editData.id} onChange={handleEditOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Name : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                               name={"name"} type={"text"} value={editData.name} onChange={handleEditOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Price : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                               name={"price"}  type={"number"} value={editData.price} onChange={handleEditOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Currency : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                               name={"currency"}  type={"text"} value={editData.currency} onChange={handleEditOnChange}/>
                                                    </div>

                                                    <div className={"pb-2"}>
                                                        <label className={"text-12px pl-5"} htmlFor={""}>Image : </label>
                                                        <input className={"float-right border-[2px] border-teal-700"}
                                                               name={"image"}  type={"text"} value={editData.image} onChange={handleEditOnChange}/>
                                                    </div>

                                                    <div className={"mt-2 pl-20  w-full"}>
                                                        <button
                                                            className={"p-1 items-start  w-full bg-teal-700 text-[14px] mt-5 rounded-md text-white font-bold hover:bg-black"}
                                                            type={"submit"}
                                                            onClick={handleUpdate}>
                                                            Update
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        )
                                    }

                                </div>
                                <div className={"p-9 "}>
                                    <table className={"w-full pr-3 justify-center items-center border-black shadow-2xl"}>
                                        <thead className={"bg-gray-50 border-b-2 border-gray-200"}>
                                        <tr className={""}>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Product Id</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Name</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Price</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Currency</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Image</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Edit</th>
                                            <th className={"p-3 text-sm font-semibold tracking-wide text-center"}>Delete</th>

                                        </tr>
                                        </thead>

                                        <tbody>

                                        {dataList && Array.isArray(dataList) && dataList.map((el) => {
                                            console.log("Object in dataList:", el);
                                            return (
                                                <tr className={"bg-white border-b-2 text-center"} key={el.id}>
                                                    <td className={"p-3 text-sm text-gray-700"}>{el.id}</td>
                                                    <td className={"p-3 text-sm text-gray-700"}>{el.name}</td>
                                                    <td className={"p-3 text-sm text-gray-700"}>{el.price}</td>
                                                    <td className={"p-3 text-sm text-gray-700"}>{el.currency}</td>
                                                    <td className={"p-3 text-sm text-gray-700"}>{el.image}</td>
                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faPenToSquare}
                                                            className={"bg-yellow-400 p-1.5 rounded-md"}
                                                            onClick={() => handleEdit(el._id)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <FontAwesomeIcon
                                                            icon={faTrash}
                                                            className={"bg-red-600 p-1.5 rounded-md"}
                                                            // @ts-ignore
                                                            onClick={() => handleDelete(el._id)}

                                                        />
                                                    </td>
                                                </tr>
                                            );
                                        })}

                                        {/*{dataList.map((el) => (*/}
                                        {/*    <tr className={"bg-white border-b-2 text-center"} key={el.id}>*/}
                                        {/*        <td className={"p-3 text-sm text-gray-700"}>{el.id}</td>*/}
                                        {/*        <td className={"p-3 text-sm text-gray-700"}>{el.name}</td>*/}
                                        {/*        <td className={"p-3 text-sm text-gray-700"}>{el.price}</td>*/}
                                        {/*        <td className={"p-3 text-sm text-gray-700"}>{el.currency}</td>*/}
                                        {/*        <td className={"p-3 text-sm text-gray-700"}>{el.image}</td>*/}
                                        {/*        /!*<td>*!/*/}
                                        {/*        /!*    <FontAwesomeIcon*!/*/}
                                        {/*        /!*        icon={faTrash}*!/*/}
                                        {/*        /!*    />*!/*/}
                                        {/*        /!*</td>*!/*/}
                                        {/*    </tr>*/}
                                        {/*))}*/}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            );
        }


}

