import React from "react";

const Image = ({ img, month, day }) => {
    return (
        <div className="relative mb-6">
            <img src={img} alt="" className="h-[500px] w-full object-cover" />
            <div className="absolute top-5 left-0 flex h-16 w-16 flex-col items-center justify-center bg-orange-50">
                <div className=" font-script text-2xl leading-5">{month}</div>
                <div className=" text-lg leading-5">{day}</div>
            </div>
        </div>
    );
};

export default Image;
