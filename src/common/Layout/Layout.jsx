import React, { Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loading from "@/pages/Loading";

export const Layout = ({ children }) => {
    return <div className="main-wrapper">
        <Header />
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
        <Footer />
    </div>;
};
