import React, { useRef, useEffect } from 'react';
const Banner = () => {
    const elementRef = useRef(null);
    useEffect(() => {
        elementRef.current.style.backgroundImage = 'url(/img/banner/page-title.jpg)';
    }, [elementRef]);
    return <section ref={elementRef} className="page-title-section bg-img cover-background top-position1 secondary-overlay" data-overlay-dark={7} data-background="img/banner/page-title.jpg">
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="position-relative">
                        <h1>About Us</h1>
                    </div>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="#!">About Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>;
};

export default Banner;
