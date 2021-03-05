import React from "react";
import './findSponsors.css';
import Footer from "../Components/Footer";
import {useHistory} from "react-router-dom";
import Header2 from "../Components/Header2";

function sponsorDetails() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }

    return (
        <div className="main">
            <Header2/>
            <section className="main py-3 px-5">
                <div className={"mx-5"}>
                    <div className={"bg-white d-flex p-3"}>
                        <div>
                            <h6 className={"font-weight-bold text-primary"}>Brand</h6>
                            <h4 className={"font-weight-bold"}>Product Name</h4>
                            <p className={"mt-3 mb-2 text-lightgrey"}><b>Catagory:</b> Technology</p>
                            <p className={"text-lightgrey mb-1"}><b>Platform:</b> Youtube, Facebook, Instagram, etc</p>
                            <p className="text-lightgrey mt-3 mr-3">Lorem Ipsum is simply dummy text of the printing and
                                typesetting
                                industry.
                                Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                took a
                                galley
                                of type and scrambled it to make a type specimen book. It has survived not only five
                                centuries,
                                but
                                also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        </div>
                        <div className={"ml-auto text-right"}>
                            <div className={"mr-4"}>
                                <img src="favorite.svg" height={18}/>
                                <img src="share.svg" height={18} className={"mx-4"}/>
                                <button className={"btn btn-outline-primary px-4"}>
                                    APPLY
                                </button>
                            </div>
                            <img className={"mt-4 mb-3 mr-5"} src="logo.png" height="175px"/>
                        </div>
                    </div>
                    <div className={"bg-lightgrey py-2 px-4"}>Posted On: an hour ago</div>
                    <div className={"bg-white mt-3 mb-5 p-3"}>
                        <button className={"float-right btn btn-primary mr-5"}>Follow</button>
                        <div className={"d-flex mt-2"}>
                            <h5>About </h5>
                            <h5 className={"text-primary ml-2"}>Brand</h5>
                        </div>
                        <p className={"mt-3 mb-0"}>Lorem Ipsum is simply dummy text of the printing and
                            typesetting
                            industry.
                            Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a
                            galley
                            of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries,
                            but
                            also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default sponsorDetails;