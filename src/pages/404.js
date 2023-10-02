import React, { useRef, useEffect } from 'react';
export const metadata = {
    title: 'Next.js',
  }
   
export default function Custom404() {
    const elementRef = useRef(null);
    useEffect(() => {
        elementRef.current.style.backgroundImage = 'url("img/content/error-page.png")';
    }, [elementRef]);
    return <section ref={elementRef} className="p-0 bg-img bg-secondary cover-background" data-background="img/content/error-page.png">
        <div className="container d-flex flex-column position-relative z-index-9">
            <div className="row align-items-center min-vh-100 text-center justify-content-center">
                <div className="col-lg-8 col-xl-6">
                    <div className="bg-white px-1-9 px-sm-6 py-7 border-radius-10">
                        <h1 className="error-text">404</h1>
                        <h2 className="mb-1-9">Oops! This Page is Not Found.</h2>
                        <a href="index.html" className="butn"><span>Home Page</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
}