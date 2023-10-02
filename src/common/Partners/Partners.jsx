import React from "react";

const Partners = ({ partnersList = [] }) => {
    return <section className="pt-0 wow fadeIn" data-wow-delay="200ms">
        <div className="container">
            <div className="row align-items-center mt-n4 text-center">
                {
                    partnersList.map((partner) => (
                        <div key={`partner_${partner}`} className="col-6 col-md-4 col-lg-2 mt-4">
                            <img src={partner} alt="..." />
                        </div>
                    ))
                }

            </div>
        </div>
    </section>;
};

export default Partners;
