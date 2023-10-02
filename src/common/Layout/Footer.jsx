import React from "react";

const Footer = () => {
  return   <footer className="pt-6 pt-lg-8">
  <div className="container">
      <div className="row mt-n2-9 pb-6 pb-lg-8">
          <div className="col-md-6 col-lg-5 mt-2-9 wow fadeIn" data-wow-delay="200ms">
              <div className="footer-logo mb-1-9">
                  <a href="index.html"><img src="/img/logos/footer-light-logo.png" alt="..." /></a>
              </div>
              <h4 className="text-white mb-1-9 fw-light w-lg-75 display-27 lh-base opacity8">We have 14+ years experience. Helping you overcome technology challenges.</h4>
              <ul className="social-icon-style1">
                  <li>
                      <a href="#!"><i className="fab fa-facebook-f" /></a>
                  </li>
                  <li>
                      <a href="#!"><i className="fab fa-twitter" /></a>
                  </li>
                  <li>
                      <a href="#!"><i className="fab fa-youtube" /></a>
                  </li>
                  <li>
                      <a href="#!"><i className="fab fa-linkedin-in" /></a>
                  </li>
              </ul>
          </div>
          <div className="col-md-6 col-lg-3 mt-2-9 wow fadeIn" data-wow-delay="400ms">
              <div className="ps-0">
                  <h3 className="text-white h4 mb-1-9">Newsletter</h3>
                  <p className="text-white opacity8 mb-4">Subscribe to our newsletter to receive updates on the latest news!</p>
                  <form className="quform newsletter-form" action="https://archichtml.websitelayout.net/quform/newsletter-two.php" method="post" encType="multipart/form-data" onclick>
                      <div className="quform-elements">
                          <div className="row">
                              {/* Begin Text input element */}
                              <div className="col-md-12">
                                  <div className="quform-element mb-0">
                                      <div className="quform-input">
                                          <input className="form-control" id="email_address" type="text" name="email_address" placeholder="Subscribe with us" />
                                      </div>
                                  </div>
                              </div>
                              {/* End Text input element */}
                              {/* Begin Submit button */}
                              <div className="col-md-12">
                                  <div className="quform-submit-inner">
                                      <button className="btn btn-white text-white m-0" type="submit"><i className="fas fa-paper-plane" /></button>
                                  </div>
                                  <div className="quform-loading-wrap"><span className="quform-loading" /></div>
                              </div>
                              {/* End Submit button */}
                          </div>
                      </div>
                  </form>
              </div>
          </div>
          <div className="col-md-6 col-lg-3 mt-2-9 offset-lg-1 wow fadeIn" data-wow-delay="600ms">
              <div className="ps-xl-4">
                  <h3 className="text-white h4 mb-1-9">Contacts</h3>
                  <div className="d-flex mb-1-9">
                      <div className="flex-shrink-0">
                          <img src="/img/icons/09.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3">
                          <h4 className="mb-1 h5 text-white">Contact Us</h4>
                          <p className="mb-0 text-white">(44) 123-456-789</p>
                      </div>
                  </div>
                  <div className="d-flex">
                      <div className="flex-shrink-0">
                          <img src="/img/icons/10.png" alt="..." />
                      </div>
                      <div className="flex-grow-1 ms-3">
                          <h4 className="mb-1 h5 text-white">Mail Us</h4>
                          <p className="mb-0 text-white">info@yourdomain.com</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="py-4 border-top border-color-light-white">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-12 text-center">
                  <p className="d-inline-block text-white mb-0">© <span className="current-year" /> Archic Powered by <a href="#!" className="text-primary text-white-hover">Website Design Templates</a></p>
              </div>
          </div>
      </div>
  </div>
</footer>;
};

export default Footer;
