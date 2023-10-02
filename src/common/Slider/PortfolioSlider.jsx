'use client'
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});
const options = {
    loop: false,
    margin: 50,
    items: 3,
    autoplay: false,
    dots : false,
    lazyLoad : true
};

const PortfolioSlider = () => {
    return <OwlCarousel className='owl-carousel  portfolio-carousel2 owl-theme ' {...options}>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="1400ms">
            <div className="portfolio-img">
                <img src="img/portfolio/06.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Commercial</span>
                <h3 className="mb-0 h4"><a href="#!">MDZ Designs</a></h3>
            </div>
        </div>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="1600ms">
            <div className="portfolio-img">
                <img src="img/portfolio/07.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Commercial</span>
                <h3 className="mb-0 h4"><a href="#!">Membrane Structure</a></h3>
            </div>
        </div>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="1800ms">
            <div className="portfolio-img">
                <img src="img/portfolio/08.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Architecture</span>
                <h3 className="mb-0 h4"><a href="#!">Best Engineering</a></h3>
            </div>
        </div>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="2000ms">
            <div className="portfolio-img">
                <img src="img/portfolio/09.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Planning</span>
                <h3 className="mb-0 h4"><a href="#!">Market Research</a></h3>
            </div>
        </div>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="2200ms">
            <div className="portfolio-img">
                <img src="img/portfolio/10.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Architects</span>
                <h3 className="mb-0 h4"><a href="#!">Whitney Architecture</a></h3>
            </div>
        </div>
        <div className="portfolio-style01 wow fadeIn" data-wow-delay="2400ms">
            <div className="portfolio-img">
                <img src="img/portfolio/11.jpg" className="border-radius-10" alt="..." />
            </div>
            <div className="portfolio-content">
                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">Commercial</span>
                <h3 className="mb-0 h4"><a href="#!">Tyler Architecture</a></h3>
            </div>
        </div>
    </OwlCarousel>;
};

export default PortfolioSlider;
