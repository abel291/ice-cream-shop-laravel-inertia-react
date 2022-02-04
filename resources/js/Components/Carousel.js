import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "@inertiajs/inertia-react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

const Carousel = ({ data, height = "500px" }) => {
    return (
        <div className="relative bg-orange-50 h-full flex items-center overflow-hidden">
            <button className="swiper-button-next  ">
                <ChevronRightIcon className="h-full w-full " />
            </button>
            <button className="swiper-button-prev ">
                <ChevronLeftIcon className="h-full w-full " />
            </button>
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
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
                {data.map((item, key) => (
                    <SwiperSlide key={key}>
                        <div className="mx-auto flex max-w-7xl items-center px-16 py-8 ">
                            <div className="w-7/12 text-right">
                                <h2 className="title text-6xl">
                                    Lorem ipsum dolor sit amet consectetur
                                </h2>
                                <div className="mt-10">
                                    <Link href="#" className="btn btn-md ">
                                        Ver mas
                                    </Link>
                                </div>
                            </div>
                            <div className="flex w-5/12 justify-center">
                                <img
                                    //className="object-cover w-full mx-auto"
                                    className="max-h-96 "
                                    src={item.image}
                                    alt={item.image}
                                    //style={{ height: height }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
