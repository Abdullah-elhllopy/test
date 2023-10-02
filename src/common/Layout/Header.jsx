import React from "react";
import Link from 'next/link'
const Header = () => {
    return <header className="header-style1 menu_area-light">
        <div className="navbar-default border-bottom border-color-light-white">
            {/* start top search */}
            <div className="top-search bg-primary">
                <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                    <form className="search-form" action="https://archichtml.websitelayout.net/search.html" method="GET" acceptCharset="utf-8">
                        <div className="input-group">
                            <span className="input-group-addon cursor-pointer">
                                <button className="search-form_submit fas fa-search text-white" type="submit" />
                            </span>
                            <input type="text" className="search-form_input form-control" name="s" autoComplete="off" placeholder="Type & hit enter..." />
                            <span className="input-group-addon close-search mt-1"><i className="fas fa-times" /></span>
                        </div>
                    </form>
                </div>
            </div>
            {/* end top search */}
            <div className="container-fluid px-lg-1-6 px-xl-2-5 px-xxl-2-9">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-12">
                        <div className="menu_area alt-font">
                            <nav className="navbar navbar-expand-lg navbar-light p-0">
                                <div className="navbar-header navbar-header-custom">
                                    {/* start logo */}
                                    <Link  href="/" className="navbar-brand"><img id="logo" src="/img/logos/logo-inner.png" alt="logo" /></Link >
                                    {/* end logo */}
                                </div>
                                <div className="navbar-toggler" />
                                {/* start menu area */}
                                <ul className="navbar-nav ms-auto" id="nav">
                                    <li>
                                        <Link  href="/">Home</Link >
                                    </li>
                                    <li>
                                        <a href="#!">Pages</a>
                                        <ul>
                                            <li><Link  href="/aboutUs">About Us</Link ></li>
                                            <li><Link  href="/contact">Contact</Link ></li>
                                            <li><Link  href="/404">404 Page</Link ></li>
                                            <li><Link  href="/privacypolicy">Privacy Policy</Link ></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Service</a>
                                        <ul>
                                            <li><Link  href="/ourservices">Our Services</Link></li>
                                            <li><Link  href="/services/5">Expert Mechanical</Link ></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#!">Portfolio</a>
                                        <ul>
                                            <li><Link  href="/portfoliodetails">Portfolio Details</Link ></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="attr-nav align-items-xl-center ms-xl-auto main-font">

                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>;
};

export default Header;
