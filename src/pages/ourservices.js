import Banner from "@/common/Banner/Banner";
import Contact from "@/common/Contact/Contact";
import Head from "next/head";
import React from "react";

const OurServices = () => {
    return <>
        <Head>
            <title>Archic - Construction and Architecture HTML Template</title>
        </Head>
        <Banner />
        <section>
            <div className="container">
                <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
                    <span className="sm-title">Our Services</span>
                    <h2 className="mb-0 h1">We Provide The Best Services</h2>
                </div>
                <div className="row mt-n2-9">
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/03.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-01.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="apartment-design.html">Apartment Design</a></h3>
                                <a href="apartment-design.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="350ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/04.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-02.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="expert-mechanical.html">Expert Mechanical</a></h3>
                                <a href="expert-mechanical.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="500ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/05.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-03.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="architecture-building.html">Architecture &amp; Building</a></h3>
                                <a href="architecture-building.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="200ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/06.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-04.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="heavy-equipment.html">Heavy Equipment</a></h3>
                                <a href="heavy-equipment.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="350ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/07.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-05.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="interior-design.html">Interior Design</a></h3>
                                <a href="interior-design.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4 mt-2-9 wow fadeIn" data-wow-delay="500ms">
                        <div className="card-style1">
                            <div className="card-main-img">
                                <div className="card-border" />
                                <div className="card-icon">
                                    <img src="img/icons/08.png" alt="..." />
                                </div>
                                <div className="card-image">
                                    <img src="img/service/service-06.jpg" alt="..." />
                                </div>
                            </div>
                            <div className="card-content">
                                <h3 className="mb-2 h5"><a href="repair-painting.html">Repair &amp; Painting</a></h3>
                                <a href="repair-painting.html">Read more <i className="ti-arrow-right align-middle ms-1" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
    </>;
};

export default OurServices;
