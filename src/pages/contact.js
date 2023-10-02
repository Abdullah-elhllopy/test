import Banner from '@/common/Banner/Banner';
import Head from 'next/head';
import React from 'react';

export const metadata = {
    title: 'Next.js',
}
const Contact = () => {
    return <>
        <Head>
            <title>Archic - Construction and Architecture HTML Template</title>
        </Head>
        <Banner />
        <section className="pb-0">
            <div className="container position-relative z-index-9">
                <div className="row">
                    <div className="col-xl-5 mb-1-6 mb-xl-0 wow fadeIn" data-wow-delay="200ms">
                        <div className="pe-xl-1-9">
                            <div className="section-title left mb-1-9">
                                <span className="sm-title">Contact Us</span>
                                <h2 className="mb-0 h1 mt-2">Write Us Any Message</h2>
                            </div>
                            <p className="mb-1-9">These are the phrases we stay via way of means of in the whole lot we do. Each brand we build, and we create.</p>
                            <ul className="social-icon-style3 ps-0">
                                <li className="me-1"><a href="#!"><i className="fab fa-facebook-f" /></a></li>
                                <li className="me-1"><a href="#!"><i className="fab fa-twitter" /></a></li>
                                <li className="me-1"><a href="#!"><i className="fab fa-instagram" /></a></li>
                                <li className="me-0"><a href="#!"><i className="fab fa-linkedin-in" /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-7 wow fadeIn" data-wow-delay="400ms">
                        <form className="contact quform" action="https://archichtml.websitelayout.net/quform/contact.php" method="post" encType="multipart/form-data" onclick>
                            <div className="quform-elements">
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <label htmlFor="name">Your Name <span className="quform-required">*</span></label>
                                            <div className="quform-input">
                                                <input className="form-control" id="name" type="text" name="name" placeholder="Your name here" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <label htmlFor="email">Your Email <span className="quform-required">*</span></label>
                                            <div className="quform-input">
                                                <input className="form-control" id="email" type="text" name="email" placeholder="Your email here" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <label htmlFor="subject">Your Subject <span className="quform-required">*</span></label>
                                            <div className="quform-input">
                                                <input className="form-control" id="subject" type="text" name="subject" placeholder="Your subject here" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="quform-element form-group">
                                            <label htmlFor="phone">Contact Number</label>
                                            <div className="quform-input">
                                                <input className="form-control" id="phone" type="text" name="phone" placeholder="Your phone here" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="quform-element form-group">
                                            <label htmlFor="message">Message <span className="quform-required">*</span></label>
                                            <div className="quform-input">
                                                <textarea className="form-control" id="message" name="message" rows={3} placeholder="Tell us a few words" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="quform-element">
                                            <div className="form-group">
                                                <div className="quform-input">
                                                    <input className="form-control" id="type_the_word" type="text" name="type_the_word" placeholder="Type the below word" />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="quform-captcha">
                                                    <div className="quform-captcha-inner">
                                                        <img src="quform/images/captcha/courier-new-light.png" alt="..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="quform-submit-inner">
                                            <button className="butn border-0" type="submit"><span>Send Message</span></button>
                                        </div>
                                        <div className="quform-loading-wrap text-start"><span className="quform-loading" /></div>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="pb-lg-0 overflow-visible">
            <div className="container position-relative z-index-9">
                <div className="row border-lg-top">
                    <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
                        <div className="border-lg-end h-100 py-lg-7">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="ti-mobile text-primary display-10" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h5">Phone Number</h3>
                                    <p className="mb-0">(+44) 123 456 789</p>
                                    <p className="mb-0">(+1) 234-567-9874</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 mb-1-9 mb-lg-0 wow fadeIn" data-wow-delay="400ms">
                        <div className="border-lg-end h-100 py-lg-7">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="ti-location-pin text-primary display-10" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h5">Location</h3>
                                    <p className="mb-0 w-lg-80">66 Guild Street 512B, Great North Town.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="600ms">
                        <div className="h-100 py-lg-7">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <div className="card-icon">
                                        <i className="ti-email text-primary display-10" />
                                    </div>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h3 className="h5">Email Address</h3>
                                    <p className="mb-0">add@emailhere.com</p>
                                    <p className="mb-0">info@yourdomain.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="img/bg/bg-04.png" className="position-absolute bottom-0 right" alt="..." />
        </section>

        <section className="p-0">
            <div className="container-fuild wow fadeIn" data-wow-delay="200ms">
                <iframe className="contact-map" id="gmap_canvas" src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed" />
            </div>
        </section>
    </>
};

export default Contact;
