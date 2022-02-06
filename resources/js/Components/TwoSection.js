import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSection = ({ img, reverse = false, children }) => {
    return (
        <div>
            <div className="mx-auto">
                <div
                    className={
                        "flex flex-col-reverse md:flex-row " +
                        (reverse && "flex-row-reverse")
                    }
                >
                    <div className="w-full md:w-1/2 ">
                        <img
                            src={img}
                            className="h-full w-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="w-full md:w-1/2 ">
                        <div className="px-[10%] pb-[18%] pt-[20%] lg:px-[15%]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TwoSectionTitle = ({ className = "", children }) => {
    return (
        <h3
            className={
                "title mb-10 w-full text-5xl md:mb-7 md:text-4xl" +
                " " +
                className
            }
        >
            {children}
        </h3>
    );
};
export const TwoSectionSubTitle = ({ className = "", children }) => {
    return (
        <p className={"font-script  text-4xl md:text-5xl text-gray-400" + " " + className}>
            {children}
        </p>
    );
};
export const TwoSectionText = ({ className = "", children }) => {
    return <p className={"mb-7 font-text" + " " + className}>{children}</p>;
};

export default TwoSection;
