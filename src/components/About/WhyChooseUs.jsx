import Link from "next/link";
import React from "react";

const WhyChooseUs = ({ data }) => {
    return <section className="bg-img cover-background pb-0 pt-lg-0 secondary-overlay" data-overlay-dark={8} data-background="img/bg/bg-02.jpg">
        <div className="container position-relative z-index-9">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-2-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
                    <div className="story-video">
                        <div className="section-title mb-1-9">
                            <span className="sm-title">{data.title}</span>
                            <h2 className="mb-0 h1 text-white">{data.head}</h2>
                        </div>
                        <Link className="video video_btn" href={data.link}>
                            <i className="fa fa-play" />
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
                    <div className="ps-xl-6">
                        <ul className="why-us-block">
                            {
                                data.workFields.map((field , index) => (
                                    <li key={`work_field_${index}`} className="inner-block">
                                        <div className="content">
                                            <img src={field.img} className="mb-3" alt="..." />
                                            <h4>{field.title}</h4>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>;
};

export default WhyChooseUs;
