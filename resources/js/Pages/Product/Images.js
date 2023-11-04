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
                <Swiper
                    spaceBetween={12}
                    centeredSlides={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 max-h-96  md:max-h-[500px]"
                >
                    {product.images.map((item, key) => (
                        <SwiperSlide
                            key={key}
                            className="flex items-center justify-center"
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                title={item.title}
                                className=" w-full rounded-lg "
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
                        <SwiperSlide key={key} className=" cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.alt}
                                title={item.title}
                                className="max-w-full object-cover rounded h-28"
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
