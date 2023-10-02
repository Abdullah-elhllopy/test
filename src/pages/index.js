
import React from 'react';
import Contact from '@/common/Contact/Contact';
import dynamic from 'next/dynamic'
import Head from 'next/head';
import Loading from './Loading';
import { getData } from '@/services/getData';
import Partners from '@/common/Partners/Partners';
const SliderWithNoSSR = dynamic(
  () => import("@/common/Slider/Slider"),
  { ssr: true }
)
const ProjectSliderWithNoSSR = dynamic(
  () => import("@/common/Slider/ProjectsSlider"),
  { ssr: true }
)
const Home = ({ data }) => {
  if (!data) return <Loading />
  const { slider, about, services, projects , partners } = data
  return (
    <>
      <Head>
        <title>Archic - Construction and Architecture HTML Template</title>
      </Head>
      <SliderWithNoSSR sliderData={slider} />
      <section>
        <div className="container position-relative z-index-9">
          <div className="row align-items-xxl-center about-style01">
            <div className="col-lg-6 mb-1-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
              <div className="row">
                <div className="col-sm-3 d-none d-sm-block">
                  <img src={about.images[0]} className="about-img1" alt="..." />
                </div>
                <div className="col-sm-9">
                  <img src={about.images[1]} className="about-img2" alt="..." />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="400ms">
              <div className="ps-lg-2-3">
                <div className="section-title">
                  <span className="sm-title">{about.title}</span>
                </div>
                <h2 className="h1 mb-1-9">{about.head}</h2>
                <p className="mb-1-9">{about.des}</p>
                <div className="row mb-2-3">
                  {about.certificates.map((certificate, index) => (
                    <div key={`certificate_${index}`} className="col-md-6 mb-4 mb-md-0">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img src={certificate.img} alt="..." />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4 className="mb-0 h5">{certificate.title}</h4>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
                <div className="bg-light-gray px-2-3 py-1-9 position-relative border-radius-10">
                  <p className="mb-0 lead font-weight-500 position-relative z-index-9 text-secondary">{about.card.des}</p>
                  <img src={about.card.img} className="position-absolute top-0 right" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="img/bg/bg-06.jpg" className="position-absolute bottom-0 right" alt="..." />
      </section>
      <section className="bg-secondary">
        <div className="container">
          <div className="section-title mb-1-9 mb-md-6 text-center wow fadeIn" data-wow-delay="200ms">
            <span className="sm-title">{services.title}</span>
            <h2 className="mb-0 text-white display-16 display-sm-13 display-md-10 display-lg-8 display-xl-6">{services.head}</h2>
          </div>
          <div className="row gx-xxl-5 mt-n1-9">
            {
              services.cards.map((card, index) => (
                <div key={`card_services_${index}`} className="col-md-6 col-xl-4 mt-1-9 wow fadeIn" data-wow-delay="400ms">
                  <div className="card-style1">
                    <div className="card-main-img">
                      <div className="card-border" />
                      <div className="card-icon">
                        <img src={card.cardIcon} alt="..." />
                      </div>
                      <div className="card-image">
                        <img src={card.cardImage} alt="..." />
                      </div>
                    </div>
                    <div className="card-content">
                      <h3 className="mb-2 h5"><a href="apartment-design.html">{card.cardContent.cardTitle}</a></h3>
                      <a href="apartment-design.html">{card.cardContent.btn.name} <i className="ti-arrow-right align-middle ms-1" /></a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <ProjectSliderWithNoSSR projectsData={projects} />
      <Partners partnersList={partners}/>
      <section className="bg-img cover-background call-to-action1 video-banner jarallax secondary-overlay" data-overlay-dark={7} style={{ backgroundImage: 'url(img/banner/video-cover.jpg)' }} data-jarallax data-speed="0.8" data-video-src="https://www.youtube.com/watch?v=x4dEfxj_Ttk">
        <div className="container position-relative z-index-9">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-1-9 mb-lg-0 wow fadeIn" data-wow-delay="200ms">
              <h2 className="display-16 display-sm-13 display-md-10 display-lg-8 display-xl-6 mb-1-9 text-white">We building everything best that you needed</h2>
              <a href="contact.html" className="butn md">Get Started</a>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <ul className="list-style3">
                <li className="wow fadeInUp" data-wow-delay="200ms">
                  <i className="ti-check text-primary me-3" />
                  <p className="mb-0 text-white">We’ve expert &amp; certified staff</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay="350ms">
                  <i className="ti-check text-primary me-3" />
                  <p className="mb-0 text-white"> We only provide quality services</p>
                </li>
                <li className="wow fadeInUp" data-wow-delay="500ms">
                  <i className="ti-check text-primary me-3" />
                  <p className="mb-0 text-white">We offer you free estimates</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <span className="shape1" />
      </section>
      <Contact />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const data = getData('home')
  return {
    props: {
      data,
    },
  };
}