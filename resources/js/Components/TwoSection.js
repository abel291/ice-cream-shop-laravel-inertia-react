import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSection = ({ img, reverse = false, children }) => {
    return (
        <div>
            <div className="mx-auto">
                <div className={"flex " + (reverse && "flex-row-reverse")}>
                    <div className="w-1/2 ">
                        <img
                            src={img}
                            className="h-full w-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="w-1/2 ">
                        <div className="px-[15%] py-[15%] pt-[20%]">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const TwoSectionTitle = ({ className="", children }) => {
    return (
        <h3 className={"title mb-7 w-full text-4xl" + " " + className}>
            {children}
        </h3>
    );
};
export const TwoSectionSubTitle = ({ className="", children }) => {
    return (
        <p className={"font-script text-5xl text-gray-400" + " " + className}>
            {children}
        </p>
    );
};
export const TwoSectionText = ({ className="", children }) => {
    return <p className={"mb-7 font-text" + " " + className}>{children}</p>;
};

export default TwoSection;
