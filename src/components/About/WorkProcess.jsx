import React from "react";

const WorkProcess = ({ data }) => {
    return <section>
        <div className="container">
            <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
                <span className="sm-title">{data.title}</span>
                <h2 className="mb-0 h1">{data.head}</h2>
            </div>
            <div className="text-center">
                <div className="row mt-n1-9">
                    {
                        data.steps.map((step, index) => (
                            <div key={`step_${index}`} className="col-lg-3 col-md-6 mt-1-9 wow fadeIn" data-wow-delay="400ms">
                                <div className="process-style1 position-relative">
                                    <div className="process-icon">
                                        <div className="process-img">
                                            <img src={step.icon} alt="..." />
                                            <div className="tag">0{index + 1}</div>
                                        </div>
                                    </div>
                                    <h4 className="mb-0">{step.title}</h4>
                                    {
                                        (index + 1) === (data.steps.length ) ? null :

                                            <img src="img/content/arrow01.png" className="arrow" alt="..." />
                                    }
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    </section>;
};

export default WorkProcess;
