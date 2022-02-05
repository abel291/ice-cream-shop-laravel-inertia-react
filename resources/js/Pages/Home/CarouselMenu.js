import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "@inertiajs/inertia-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { formatCurrency } from "@/Helpers/helpers";
const dataFake = [
    {
        path: "#",
        name: "APPLE",
        text: "Lorem ipsum dolor",
        price: 1.8,
        image: "/img/home/img-bola-1.png",
    },
    {
        path: "#",
        name: "BLUEBERRY",
        text: "Lorem ipsum dolor",
        price: 1.2,
        image: "/img/home/img-bola-2.png",
    },
    {
        path: "#",
        name: "STRAWBERRY",
        text: "Lorem ipsum dolor",
        price: 3.8,
        image: "/img/home/img-bola-3.png",
    },
    {
        path: "#",
        name: "CHOCOLATE",
        text: "Lorem ipsum dolor",
        price: 1.8,
        image: "/img/home/img-bola-1.png",
    },
    {
        path: "#",
        name: "ORANGE",
        text: "Lorem ipsum dolor",
        price: 1.2,
        image: "/img/home/img-bola-2.png",
    },
    {
        path: "#",
        name: "PLUM",
        text: "Lorem ipsum dolor",
        price: 3.8,
        image: "/img/home/img-bola-3.png",
    },
];
const CarouselMenu = ({ data, height = "500px" }) => {
    return (
        <div className="relative flex h-full items-center overflow-hidden bg-gray-800">
            <button className="swiper-button-next  ">
                <ChevronRightIcon className="h-full w-full text-white " />
            </button>
            <button className="swiper-button-prev ">
                <ChevronLeftIcon className="h-full w-full text-white " />
            </button>
            <div className="mx-auto flex max-w-7xl items-center px-24 pt-32 pb-24">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={80}
                    slidesPerView={3}
                    centeredSlides={true}
                    //navigation
                    // autoplay={{
                    //     delay: 2500,
                    //     disableOnInteraction: false,
                    // }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                >
                    {dataFake.map((item, key) => (
                        <SwiperSlide key={key}>
                            <div className="space-y-1 text-center text-white">
                                <img
                                    className="inline-block max-h-64 h-full"
                                    src={item.image}
                                    alt={item.image}
                                />

                                <h2 className="title text-xl">{item.name}</h2>
                                <p className="font-text">{item.text} </p>
                                <div className="title">
                                    {formatCurrency(item.price)}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CarouselMenu;
