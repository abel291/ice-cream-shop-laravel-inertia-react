import React from "react";

import { Head } from "@inertiajs/inertia-react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";
import Newsletter from "@/Components/Newsletter";
const AppLayout = ({ children, title = "" }) => {
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
