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
    const data = [
        {
            path: "#",
            text: "text-1",
            image: "/img/home/img-6.png",
        },
        {
            path: "#",
            text: "text-2",
            image: "/img/home/img-6.png",
        },
        {
            path: "#",
            text: "text-4",
            image: "/img/home/img-6.png",
        },
    ];
    
    return (
        <AppLayout title="Inicio">
            <div className="h-[calc(100vh-96px)] ">
                <Carousel data={data} />
            </div>
            <TwoSectionMenu />
            <CarouselMenu data={data}/>
            <TwoSectionHours />
            <OneSection />
            <TwoSectionItems />
            <TwoSectionContactUs/>
        </AppLayout>
    );
}

export default Home;
