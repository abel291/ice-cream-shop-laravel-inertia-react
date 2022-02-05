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

export default TwoSection;
