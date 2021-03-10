import React from "react";
import './findSponsors.css';
import Footer from "../Components/Footer";
import {useHistory} from "react-router-dom";
import Header1 from "../Components/Header1";
import SponsorCard from "../Components/sponsorCard";
import $ from "jquery";
import Firebase from "../Components/Firebase";
import Loading from "../Components/Loading";

function findSponsors() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const history = useHistory();
    const goToHome = () => {
        history.push("/home");
    }

    $(document).ready(function () {
        $('.d1').hide();
        let i = 0;
        Firebase.database().ref("/posts/").once("value").then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                const childData = childSnapshot.val();
                $('#' + i + ' .br').text(childData['Brand']);
                $('#' + i + ' .pn').text(childData['ProductName']);
                $('#' + i + ' .ti').text(childData['CreatedOn']);
                $('#' + i + ' .de').text(childData['Description']);
                i++;
            });
            for (let i = 0; i < 5; i++) {
                if ($('#' + i + ' .br').text() === 'Brand') {
                    $('#' + i).hide();
                }
            }
            $('.lo').hide();
            $('.d1').show();
        });
    });

    return (
        <div className="main">
            <Loading/>
            <div className={'d1 w-100'}>
                <Header1>
                    <span>Find Sponsees</span>
                </Header1>
                <section>
                    <div className="input-group sb bg-lightgrey pt-2 pb-2 mb-2">
                        <input type="search" className="form-control p-4" placeholder="Search for Company & Industry"
                               aria-label="Search"
                               aria-describedby="search-addon"/>
                        <button type="button" className="btn btn-primary font-weight-normal ml-1 pl-5 pr-5">Search
                        </button>
                    </div>
                    <div className="pb-5 d-flex">
                        <div className="bg-white filter mb-3 ml-5">
                            <p className="mb-0 text-lightgrey p-2">Filter By</p>
                            <hr className="bg-lightgrey mt-0 mb-0"/>
                            <div className="form-check">
                                <h6 className="ml-3 mt-2">Category</h6>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Technology
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Health Care
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Music
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Website
                                </label><br/>
                                <input className="form-check-input mb-3" type="checkbox" value=""
                                       id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Course
                                </label>
                            </div>
                            <hr className="bg-lightgrey mt-0 mb-0"/>
                            <div className="form-check">
                                <h6 className="ml-3 mt-2">Platform</h6>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Youtube
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Facebook
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Instagram
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Website
                                </label>
                            </div>
                            <hr className="bg-lightgrey mt-0 mb-0"/>
                            <div className="form-check pb-1">
                                <h6 className="ml-3 mt-2">Brand</h6>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Redmi
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    MamaEarth
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    WOW
                                </label><br/>
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label className="form-check-label " htmlFor="flexCheckDefault">
                                    Samsung
                                </label>
                            </div>
                        </div>
                        <div className="li">
                            <main>
                                <section className='container'>
                                    <SponsorCard/>
                                </section>
                            </main>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </div>
    )
        ;
}

export default findSponsors;
