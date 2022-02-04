import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";
import Carousel from "@/Components/Carousel";
import TwoSection from "./Home/TwoSection";

export default function Dashboard(props) {
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
        <Authenticated auth={props.auth} errors={props.errors}>
            <Head title="Home" />
            <div className="h-[calc(100vh-96px)] ">
                <Carousel data={data} />
            </div>
            <TwoSection/>
        </Authenticated>
    );
}
