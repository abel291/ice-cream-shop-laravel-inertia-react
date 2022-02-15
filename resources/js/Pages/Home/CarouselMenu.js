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
import { Heading5, Heading6 } from "@/Components/Elements";
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
const CarouselMenu = ({ products, height = "500px" }) => {
    return (
        <div className="overflow-hidden bg-gray-800">
            <div className="py-section relative mx-auto flex h-full items-center  px-10 md:max-w-7xl  lg:px-16">
                <button className="swiper-button-next  ">
                    <ChevronRightIcon className="h-full w-full text-white " />
                </button>
                <button className="swiper-button-prev ">
                    <ChevronLeftIcon className="h-full w-full text-white " />
                </button>

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={80}
                    slidesPerView={3}
                    breakpoints={{
                        // when window width is >= 320px
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },

                        // when window width is >= 640px
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        // when window width is >= 768px
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
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
                    {products.map((item, key) => (
                        <SwiperSlide key={key}>
                            <Link href={route("product", { slug: item.slug })}>
                                <div className="flex flex-col space-y-1 text-center text-white">
                                    <div>
                                        <img
                                            className="inline-block h-52 max-h-64 md:h-full"
                                            src={item.img_ball}
                                            alt={item.img_ball}
                                        />
                                    </div>

                                    <Heading5>{item.name}</Heading5>
                                    <p className="font-text text-sm">
                                        {item.sentence}
                                    </p>
                                    <Heading6>
                                        {formatCurrency(item.price)}
                                    </Heading6>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CarouselMenu;
