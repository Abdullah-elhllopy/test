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
    dots: false,
    lazyLoad: true
};

const ProjectsSlider = ({ projectsData = null }) => {
    if (projectsData) {
        return (
            <section className="position-relative z-index-9">
                <div className="bg-secondary section-bg" />
                <div className="position-relative z-index-9">
                    <div className="container">
                        <div className="section-title mb-1-9 mb-md-6 wow fadeIn" data-wow-delay="200ms">
                            <span className="sm-title">{projectsData.title}</span>
                            <h2 className="mb-0 text-white display-16 display-sm-13 display-md-10 display-lg-8 display-xl-6">{projectsData.head}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-10 offset-lg-2">
                            <OwlCarousel className='portfolio-carousel owl-carousel owl-theme owl-loaded owl-drag' {...options}>
                                {
                                    projectsData.cards.map((project, index) => (
                                        <div key={`project_${index}`} className="portfolio-style01">
                                            <div className="portfolio-img">
                                                <img src={project.img} className="left-radius" alt="..." />
                                            </div>
                                            <div className="portfolio-content">
                                                <span className="text-primary d-block mb-1 text-uppercase font-weight-600 small">{project.Commercial}</span>
                                                <h3 className="mb-0 h4"><a href="portfolio-details.html">{project.btn.name}</a></h3>
                                            </div>
                                        </div>
                                    ))
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
};

export default ProjectsSlider;
