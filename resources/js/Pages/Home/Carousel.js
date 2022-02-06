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
        <div className="relative flex h-full items-center overflow-hidden bg-orange-50">
            <button className="swiper-button-next   ">
                <ChevronRightIcon className="h-full w-full text-gray-800 " />
            </button>
            <button className="swiper-button-prev  ">
                <ChevronLeftIcon className="h-full w-full text-gray-800 " />
            </button>
            <div className="flex max-w-full items-center px-8 md:px-10 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-16 lg:py-8">
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
                            <div className="flex flex-col-reverse items-center md:flex-row">
                                <div className="text-center md:w-8/12 md:pr-9 md:text-right">
                                    <h2 className="title text-3xl md:text-4xl lg:text-6xl">
                                        Lorem ipsum dolor sit amet consectetur
                                    </h2>
                                    <div className=" mt-6 lg:mt-10 ">
                                        <Link href="#" className="btn btn-md ">
                                            Ver mas
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-center md:w-4/12">
                                    <img
                                        //className="object-cover w-full mx-auto"
                                        className="mb-6 inline-block h-52 max-h-96 md:h-full lg:mb-0 "
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
        </div>
    );
};

export default Carousel;
