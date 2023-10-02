import React from "react";

const Contact = () => {
    return <section className="bg-primary py-8 overflow-visible">
        <div className="container">
            <div className="row justify-content-xxl-end align-items-center">
                <div className="col-lg-8 col-xl-6 mb-4 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
                    <div className="section-title white">
                        <h2 className="mb-0 h1 text-white">For all your construction needs!</h2>
                    </div>
                </div>
                <div className="col-lg-3 wow fadeIn" data-wow-delay="400ms">
                    <div className="text-lg-end">
                        <a href="contact.html" className="butn white"><span>Contact Us</span></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="left-img-block">
            <div className="left-img">
                <img src="/img/content/footer.jpg" alt="..." />
            </div>
        </div>
    </section>;
};

export default Contact;
