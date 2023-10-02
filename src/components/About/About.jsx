import React from "react";

const About = ({ data }) => {
    return <section className="overflow-visible">
        <div className="container position-relative z-index-3">
            <div className="row align-items-center about-style-02">
                <div className="col-lg-6 mb-1-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
                    <div className="me-xxl-2-9 position-relative pb-sm-12 text-center text-sm-start">
                        <img src="/img/content/about4.jpg" className="border-radius-10" alt="..." />
                        <div className="right bottom-0 d-none d-sm-block position-absolute">
                            <img src="/img/content/about3.jpg" className="border-radius-10" alt="..." />
                        </div>
                        <span className="line-box1" />
                        <span className="line-box2 d-none d-sm-block" />
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
                    <div className="ps-xl-1-9">
                        <div className="section-title">
                            <span className="sm-title">{data.title}</span>
                        </div>
                        <h2 className="h1 mb-1-9">{data.head}</h2>
                        <p className="mb-1-9">{data.desc}</p>
                        <div className="d-flex align-items-center mb-1-6 mb-lg-2-3">
                            <div className="flex-shrink-0">
                                <img src={data.provide.img} alt="..." />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <h4 className="mb-0 h5 w-lg-80">{data.provide.desc}</h4>
                            </div>
                        </div>
                        <div className="row mb-1-9">
                            {
                                data.workFields.map((field , index) => (
                                    <div key={`field_${index}`} className="col-lg-6">
                                        <ul className="list-style2 mb-0">
                                            {
                                                field.map((value, index) => (
                                                    <li key={`value_of_field_${index}`}>{value}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                ))
                            }
                        </div>
                        <img src={data.sign_img} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default About;
