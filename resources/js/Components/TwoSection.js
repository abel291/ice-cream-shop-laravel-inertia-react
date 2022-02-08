import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSection = ({ img, reverse = false, children }) => {
    return (
        <div>
            <div className="mx-auto">
                <div
                    className={
                        "flex flex-col-reverse  " +
                        (reverse ? "lg:flex-row-reverse" : "lg:flex-row")
                    }
                >
                    <div className="w-full lg:w-1/2 ">
                        <img
                            src={img}
                            className="h-full w-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="w-full lg:w-1/2 ">
                        <div className="py-section px-10 md:px-36 lg:px-16">
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
        <p
            className={
                "font-script text-5xl text-gray-400 md:text-5xl" +
                " " +
                className
            }
        >
            {children}
        </p>
    );
};
export const TwoSectionText = ({ className = "", children }) => {
    return <p className={"mb-7 font-text" + " " + className}>{children}</p>;
};

export default TwoSection;
