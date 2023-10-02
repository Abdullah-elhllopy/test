import Banner from "@/common/Banner/Banner";
import Contact from "@/common/Contact/Contact";
import PortfolioSlider from "@/common/Slider/PortfolioSlider";
import Head from "next/head";
import React from "react";

const PortfolioDetails = () => {
  return <>
    <Head>
      <title>Archic - Construction and Architecture HTML Template</title>

    </Head>

    <Banner />

    <section>
      <div className="container">
        <div>
          <div className="wow fadeIn" data-wow-delay="200ms">
            <img src="img/portfolio/portfolio-details-01.jpg" className="mb-1-9 border-radius-10" alt="..." />
          </div>
          <div className="bg-secondary text-center mb-2-3 p-2-3 border-radius-10 wow fadeIn" data-wow-delay="400ms">
            <div className="row mt-n1-9">
              <div className="col-lg-3 mt-1-9">
                <h3 className="h5 text-primary">Client</h3>
                <p className="mb-0 text-white">Theresa Dasilva</p>
              </div>
              <div className="col-lg-3 mt-1-9">
                <h3 className="h5 text-primary">Project Value</h3>
                <p className="mb-0 text-white">$679</p>
              </div>
              <div className="col-lg-3 mt-1-9">
                <h3 className="h5 text-primary">Date</h3>
                <p className="mb-0 text-white">June 14, 2022</p>
              </div>
              <div className="col-lg-3 mt-1-9">
                <h3 className="h5 text-primary">Category</h3>
                <p className="mb-0 text-white">XD Design</p>
              </div>
            </div>
          </div>
          <div className="wow fadeIn" data-wow-delay="600ms">
            <h2 className="mb-4">Project Details</h2>
            <p className="mb-4"><span className="display-26 bg-primary text-white position-relative float-start p-3 me-3 border-radius-8">W</span> e assist our clients with building their most ideal financial We comprehend youre putting something aside for all unique life altering situations: A brilliant quietness has take possion of my whole souing like these sweet mornng spring whch partake in the with my entire heart I am separated from everyone else, and feel the appeal ofexistenc in voluptate velit esse cillum fugiat nulla pariatur. excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde totam rem aperiam, eaque ipsa quae stomach muscle illo inventore veritatis et semi beatae vitae dicta sunt explicabo nemo enim ipsam voluptatem sed quia consequuntur magni dolores.</p>
          </div>
          <div className="wow fadeIn" data-wow-delay="800ms">
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
            <ul className="list-style2 mb-0">
              <li>Dedicated to Save Lives exclusive essential cancel project</li>
              <li>Override the digital divide with additional activity to beta</li>
              <li>Enable accurate supply chains rather than frictionless technology</li>
            </ul>
            <p className="mb-0 mt-1-9">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.</p>
          </div>
        </div>
        <div className="page-navigation mt-6 wow fadeIn" data-wow-delay="1000ms">
          <div className="prev-page">
            <div className="page-info">
              <a href="#!">
                <span className="image-prev"><img src="img/portfolio/prev-project.jpg" alt="IT Specialist" /></span>
                <div className="prev-link-page-info">
                  <h4 className="prev-title">Tyler Architecture</h4>
                  <span className="date-details"><span className="create-date">Jun 12, 2022</span></span>
                </div>
              </a>
            </div>
          </div>
          <div className="next-page">
            <div className="page-info">
              <a href="#!">
                <div className="next-link-page-info">
                  <h4 className="next-title">Membrane Structure</h4>
                  <span className="date-details"><span className="create-date">Jun 16, 2022</span></span>
                </div>
                <span className="image-next"><img src="img/portfolio/next-project.jpg" alt="Business Analytics" /></span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="mb-1-9 wow fadeIn" data-wow-delay="1200ms">Related Portfolio:</h3>
          <PortfolioSlider />
        </div>
      </div>
    </section>
    <Contact />
  </>;
};

export default PortfolioDetails;
