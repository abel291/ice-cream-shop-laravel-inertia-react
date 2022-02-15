import React from "react";

import { Head, usePage } from "@inertiajs/inertia-react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Newsletter from "@/Components/Newsletter";
import Breadcrumbs from "@/Components/Breadcrumbs";
const AppLayout = ({ children, title = "" }) => {
    const isError = usePage();

    return (
        <div className="min-h-screen bg-white">
            <Head title={title} />
            <Navbar />

            <main>{children}</main>
            <Newsletter />
            <Footer />
        </div>
    );
};

export default AppLayout;
