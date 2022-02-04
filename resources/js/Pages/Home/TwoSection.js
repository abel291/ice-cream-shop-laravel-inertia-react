import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSection = () => {
    return (
        <div>
            <div className="mx-auto">
                <div className="flex">
                    <div className="w-1/2 ">
                        <img
                            src="/img/home/img-1.jpg"
                            className="h-full w-full object-cover"
                            alt=""
                        />
                    </div>
                    <div className="w-1/2 ">
                        <div className="px-[12%] py-[15%] pt-[20%]">
                            <p className="mb-1 text-center font-sacramento text-5xl text-gray-400">
                                Ice cream
                            </p>
                            <h3 className="title mb-9 w-full text-center text-4xl">
                                SABOR DELICIOSO
                            </h3>
                            <div className="mb-10 grid grid-cols-2 gap-x-14 gap-y-5">
                                {[
                                    "APPLE",
                                    "BLUEBERRY",
                                    "STRAWBERRY",
                                    "CHOCOLATE",
                                    "ORANGE",
                                    "PLUM",
                                    "VANILLA",
                                    "PISTACHIO",
                                ].map((item) => (
                                    <div key={item}>
                                        <div className="title mb-1 flex">
                                            <h6 className="">{item}</h6>
                                            <div className="flex-grow border-b-2  border-dotted border-gray-700 "></div>
                                            <div className="">$2</div>
                                        </div>
                                        <div className="font-text">
                                            Lorem ipsum dolor es umi
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Link href="#" className="btn btn-md">
                                    Ver Mas
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoSection;
