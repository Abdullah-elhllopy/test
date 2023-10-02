import Link from "next/link";
import React from "react";

const TeamMembers = ({ data }) => {
    return <section>
        <div className="container">
            <div className="section-title mb-1-9 mb-md-6 text-center" data-wow-delay="200ms">
                <span className="sm-title">{data.title}</span>
                <h2 className="mb-0 h1">{data.head}</h2>
            </div>
            <div className="row mt-n1-9">
                {
                    data.members.map((member, index) => (
                        <div key={`member_${index}`} className="col-md-6 col-lg-3 mt-1-9 wow fadeIn" data-wow-delay="400ms">
                            <div className="team-style01">
                                <div className="image">
                                    <img src={member.profileImg} alt="..." />
                                    <ul className="social-box">
                                        {
                                            member.links.map((link, index) => (
                                                <li key={`link_social_${index}`}><Link href="#!"><i className={`fab ${link.class}`} /></Link></li>
                                            ))
                                        }
                                
                                    </ul>
                                </div>
                                <div className="text-center pt-4">
                                    <h3 className="h5 mb-1"><a href="team-details.html">{member.name}</a></h3>
                                    <p className="mb-0">{member.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>;
};

export default TeamMembers;
