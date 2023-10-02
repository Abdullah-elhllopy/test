import React from "react";

const OurClientSay = ({ data }) => {
    return <section className="bg-light bg-img cover-background" data-background="img/bg/bg-07.png">
        <div className="container">
            <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
                <span className="sm-title">{data.title}</span>
                <h2 className="mb-0 h1">{data.head}</h2>
            </div>
            <div className="row gx-xxl-5 mt-n2-9">
                {
                    data.reviewsUsers.map((review, index) => (
                        <div key={`review_${index}`} className="col-md-6 col-lg-4 mt-2-9 wow fadeIn" data-wow-delay="400ms">
                            <div className="testimonial-style1">
                                <div className="d-flex">
                                    <div className="flex-shrink-0">
                                        <img src={review.img} className="border-radius-10" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-4 pt-4">
                                        <h4 className="h5 mb-1">{review.name}</h4>
                                        <small>{review.small}</small>
                                    </div>
                                </div>
                                <div className="testi-text">
                                    <i className="fa-solid fa-quote-right icon" />
                                    <div className="item-desc">{review.description}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>;
};

export default OurClientSay;
