'use client'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
const options = {
    loop: true,
    margin: 10,
    items: 1,
    autoplay: true,
};

const Slider = ({ sliderData = [] }) => {
    if (sliderData.length === 0) return <></> 
    return <section className="full-screen top-position1 p-0">
        <OwlCarousel className=" slider-fade owl-theme w-100 min-vh-100" {...options}>
            {
                sliderData.map((slider, index) => (
                    <div key={`slider_${index}`} style={{ backgroundImage: `url(${slider.img})` }} className="item bg-img cover-background left-overlay-secondary" data-overlay-dark={7} data-background="img/banner/slide-01.jpg">
                        <div className="container pt-sm-6 pt-md-0 d-flex flex-column">
                            <div className="row align-items-center min-vh-100 pt-6 pt-md-0">
                                <div className="col-md-10 col-lg-8 col-xl-7 mb-1-9 mb-lg-0 py-5">
                                    <span className="small-title">{slider.title}</span>
                                    <h1 className="display-16 display-sm-7 display-lg-4 display-xl-3 display-xxl-2 text-white mb-2-9">{slider.des}</h1>
                                    <div className="mt-1-9 align-middle">
                                        {
                                            slider.buttons.map((btn, index) => (
                                                <a key={`button_link_${index}`} href={btn.link} className={`butn ${index === 0 ? 'me-sm-2 mb-2 mb-sm-0 md white ' : 'md'}`}>{btn.name}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </OwlCarousel>
    </section>
        ;
};

export default Slider;
