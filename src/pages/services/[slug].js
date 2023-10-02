import Banner from "@/common/Banner/Banner";
import Contact from "@/common/Contact/Contact";
import React , { useRef, useEffect } from 'react';

const ApartmentDesign = () => {
    const sidebarRef = useRef(null);
    useEffect(() => {
        sidebarRef.current.style.backgroundImage = 'url(/img/content/sidebar.jpg)';
    }, [sidebarRef]);
    return <>
        <Banner />
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-4 order-2 order-xl-1">
                        <div className="sidebar me-xxl-1-9">
                            <div className="widget mb-1-9 wow fadeInUp" data-wow-delay="200ms">
                                <div className="widget-content">
                                    <div className="section-title">
                                        <h5 className="sm-title mb-4">Main Services</h5>
                                    </div>
                                    <ul className="category-list list-unstyled mb-0">
                                        <li className="active"><a href="apartment-design.html">Apartment Design <span className="ti-arrow-right" /></a></li>
                                        <li><a href="expert-mechanical.html">Expert Mechanical <span className="ti-arrow-right" /></a></li>
                                        <li><a href="architecture-building.html">Architecture &amp; Building <span className="ti-arrow-right" /></a></li>
                                        <li><a href="heavy-equipment.html">Heavy Equipment <span className="ti-arrow-right" /></a></li>
                                        <li><a href="interior-design.html">Interior Design <span className="ti-arrow-right" /></a></li>
                                        <li><a href="repair-painting.html">Repair &amp; Painting <span className="ti-arrow-right" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div ref={sidebarRef} className="sidebar-banner bg-img cover-background mb-1-9 wow fadeInUp"  data-wow-delay="350ms">
                                <div className="content d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                        <img src="/img/icons/09.png" alt="..." />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <h4 className="text-white mb-1">+(44) 123 456 789</h4>
                                        <span className="text-white">info@example.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="widget wow fadeInUp" data-wow-delay="500ms">
                                <div className="widget-content">
                                    <div className="section-title">
                                        <h5 className="sm-title mb-4">Follow Us</h5>
                                    </div>
                                    <ul className="social-icon-style2 list-unstyled ps-0">
                                        <li><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                        <li><a href="#!"><i className="fab fa-twitter" /></a></li>
                                        <li><a href="#!"><i className="fab fa-instagram" /></a></li>
                                        <li><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-2-9 mb-xl-0 order-1 order-xl-2">
                        <div>
                            <div className="wow fadeInUp" data-wow-delay="200ms">
                                <h2 className="mb-3">Apartment Design</h2>
                                <p className="mb-1-9">Apartment design is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                            </div>
                            <div className="mb-1-9 text-center wow fadeInUp" data-wow-delay="300ms">
                                <img src="/img/service/service-details-1.jpg" className="border-radius-10" alt="..." />
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="400ms">
                                <h3 className="mb-3 h4">Using Latest Technology</h3>
                                <p className="mb-1-9">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
                            </div>
                            <div className="row mb-2-3">
                                <div className="col-md-7 mb-1-9 mb-md-0 wow fadeInUp" data-wow-delay="200ms">
                                    <div className="pe-lg-1-9">
                                        <p className="mb-2-3">Cursus libero viverra tempus netus diam semper curs uslectus feugiat viverra nousto</p>
                                        <div className="d-flex border-bottom pb-1-9 mb-1-9">
                                            <div className="flex-shrink-0">
                                                <div className="service-icon">
                                                    <img src="/img/icons/11.png" alt="..." />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h3 className="h5">Design and Build</h3>
                                                <p className="mb-0">An ideal mix of involvement and skill to further our focus on technology.</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="flex-shrink-0">
                                                <div className="service-icon">
                                                    <img src="/img/icons/12.png" alt="..." />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <h3 className="h5">Efficient Engineers</h3>
                                                <p className="mb-0">An ideal mix of involvement and skill to further our focus on technology.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-5 wow fadeInUp" data-wow-delay="300ms">
                                    <img src="/img/service/service-details-2.jpg" className="border-radius-10" alt="..." />
                                </div>
                            </div>
                            <div className="wow fadeInUp" data-wow-delay="400ms">
                                <p className="mb-0">Ultrices conubia vehicula malesuada. Eros commodo a duis accumsan vestibulum adipiscing hendrerit lobortis viverra non justo semper semper felis eros. Cursus libero viverra tempus netus diam vestibulum est cursus viverra lectus feugiat porta vehicula malesuada</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
    </>;
};

export default ApartmentDesign;
