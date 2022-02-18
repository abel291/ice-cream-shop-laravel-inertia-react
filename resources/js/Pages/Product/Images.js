import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Images = ({ product }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div className="">
            <div className="relative mb-3">
                <button className="swiper-button-next   ">
                    <ChevronRightIcon className="h-full w-full bg-white text-gray-700 shadow-sm  " />
                </button>
                <button className="swiper-button-prev  ">
                    <ChevronLeftIcon className="h-full w-full bg-white text-gray-700 shadow-sm  " />
                </button>
                <Swiper
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 h-[500px] bg-orange-50"
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                >
                    {product.images.map((item, key) => (
                        <SwiperSlide key={key}>
                            <img
                                src={item.img}
                                alt={item.alt}
                                alt={item.title}
                                className="mx-auto max-h-full max-w-full"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={12}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                >
                    {product.images.map((item, key) => (
                        <SwiperSlide key={key} className="h-28 cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.alt}
                                alt={item.title}
                                className=" w-full object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        // <div className="flex items-stretch gap-x-4 ">
        //     <div className="w-1/5">
        //         <div className="space-y-4">
        //             {product.images.map((item, key) => (
        //                 <div key={key}>
        //                     <img
        //                         src={item.img}
        //                         alt={item.alt}
        //                         alt={item.title}
        //                         className="w-full object-cover"
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        //     <div className="flex  w-4/5 items-center bg-orange-50">
        //         <img
        //             src={product.img}
        //             alt={product.name}
        //             alt={product.name}
        //             className=" max-h-full max-w-full "
        //         />
        //     </div>
        // </div>
    );
};

export default Images;
