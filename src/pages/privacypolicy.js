import Banner from "@/common/Banner/Banner";
import Contact from "@/common/Contact/Contact";
import Head from "next/head";
import React from "react";

const PrivacyPolicy = () => {
    return <>
        <Head>
            <meta charset="utf-8" />
            <meta name="author" content="Website Design Templates" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            <meta name="keywords" content="Construction and Architecture HTML Template" />
            <meta name="description" content="Archic - Construction and Architecture HTML Template" />
            <title>Archic - Construction and Architecture HTML Template</title>

        </Head>
        <Banner />
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-9">
                        <div className="mb-5 wow fadeIn" data-wow-delay="200ms">
                            <h3 className="mb-4 h4">Introduction</h3>
                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                            <p className="pb-0">Laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Duis aute irure dolor in reprehenderit moditempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem in reprehenderit moditempora incidunt ut labore et dolore.</p>
                        </div>
                        <div className="mb-5 wow fadeIn" data-wow-delay="400ms">
                            <h3 className="mb-4 h4">Use of user information.</h3>
                            <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Duis aute irure dolor in reprehenderit moditempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem in reprehenderit moditempora incidunt ut labore et dolore ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                            <ul className="list-style2 mb-4 ps-0">
                                <li>Veritatis et quasi architecto beatae vitae</li>
                                <li>Aliquam quaerat voluptatem in reprehenderit</li>
                                <li>Moditempora incidunt ut labore et dolore</li>
                            </ul>
                            <p className="mb-0">Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Duis aute irure dolor in reprehenderit moditempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem in reprehenderit moditempora incidunt ut labore et dolore.</p>
                        </div>
                        <div className="wow fadeIn" data-wow-delay="600ms">
                            <h3 className="mb-4 h4">Disclosure of user information.</h3>
                            <p className="mb-0">Quasi architecto beatae vitae dicta sunt explicabo. Duis aute irure dolor in reprehenderit moditempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem in reprehenderit moditempora incidunt ut labore et dolore.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Contact />
    </>;
};

export default PrivacyPolicy;
