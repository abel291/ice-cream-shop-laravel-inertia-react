import React from "react";

const ThreeImages = () => {
    return (
        <div className="grid lg:grid-cols-3">
            <div
                className="h-[400px] lg:h-[520px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/img/home/img-1.jpg)" }}
            ></div>
            <div
                className="h-[400px] lg:h-[520px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/img/home/img-2.jpg)" }}
            ></div>
            <div
                className="h-[400px] lg:h-[520px] w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/img/home/img-3.jpg)" }}
            ></div>
        </div>
    );
};

export default ThreeImages;
