import { formatCurrency } from "@/Helpers/helpers";
import React from "react";

const FlavorsList = () => {
    return (
        <div className="py-section container">
            <div className="mb-14 text-center">
                <p className="mb-1 font-script text-4xl lg:text-5xl text-gray-400">
                    Helados
                </p>
                <h2 className="title mb-5 text-4xl lg:text-5xl">
                    Sabores de helado veganos
                </h2>
                <p className="font-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et
                </p>
            </div>
            <div className="">
                <div className=" grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        "APPLE",
                        "BLUEBERRY",
                        "STRAWBERRY",
                        "CHOCOLATE",
                        "ORANGE",
                        "PLUM",
                        "VANILLA",
                        "PISTACHIO",
                        "APPLE",
                        "BLUEBERRY",
                        "STRAWBERRY",
                    ].map((item, key) => (
                        <div key={key}>
                            <div className="title mb-2 flex">
                                <h6 className="">{item}</h6>
                                <div className="flex-grow border-b-2  border-dotted border-gray-700 "></div>
                                <div className="">{formatCurrency(2)}</div>
                            </div>
                            <div className="font-text ">
                                Vanilla glaze, cold!
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlavorsList;
