import Banner from "@/Components/Banner";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import OneSection from "../Home/OneSection";
import FlavorsList from "./FlavorsList";
import FlavorsList2 from "./FlavorsList2";
import ThreeImages from "./ThreeImages";

const AboutUs = () => {
    return (
        <AppLayout title="Inicio">
            <Banner
                img=""
                subTitle="Pocas Palabra"
                title="Un poco sobre nosostros"
            />
            <FlavorsList />
            <ThreeImages />
            <OneSection />
            <FlavorsList2 />
        </AppLayout>
    );
};

export default AboutUs;
