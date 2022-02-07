import React from "react";

const Banner = ({ img, title, subTitle }) => {
    return (
        <div
            className="py-section flex items-center justify-center  bg-cover bg-center text-white "
            style={{ backgroundImage: "url(/img/about-us/banner.jpg)" }}
        >
            <div className="px-3 text-center">
                <p className="font-script text-5xl lg:text-6xl">{subTitle}s</p>
                <h1 className="title text-5xl lg:text-6xl">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;
