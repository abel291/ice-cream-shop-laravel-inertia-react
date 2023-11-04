import React from "react";
import AppLayout from "@/Layouts/AppLayout";
import Carousel from "./Carousel";

import TwoSectionMenu from "./TwoSectionMenu";
import CarouselMenu from "./CarouselMenu";
import TwoSectionHours from "./TwoSectionHours";
import OneSection from "./OneSection";
import TwoSectionItems from "./TwoSectionItems";
import TwoSectionContactUs from "./TwoSectionContactUs";

function Home(props) {
    return (
        <AppLayout title="Inicio">
            <div className="">
                <Carousel banners={props.bannersProducts} />
            </div>
            <TwoSectionMenu />
            <CarouselMenu products={props.carouselProducts} />
            <TwoSectionHours />
            <OneSection />
            <TwoSectionItems />
            <TwoSectionContactUs />
        </AppLayout>
    );
}

export default Home;
