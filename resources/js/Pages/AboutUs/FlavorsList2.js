import { Link } from "@inertiajs/inertia-react";
import React from "react";

const FlavorsList2 = () => {
    return (
        <div className="py-section container">
            <div className="mb-14 text-center">
                <p className="mb-1 font-script text-4xl text-gray-400 lg:text-5xl">
                    Helados
                </p>
                <h2 className="title mb-5 text-4xl lg:text-5xl">
                    Sabores de helado veganos
                </h2>
            </div>
            <div >
                <div className=" grid gap-x-6 gap-y-16 md:grid-cols-2 lg:gap-y-0 lg:grid-cols-4">
                    {["APPLE", "BLUEBERRY", "STRAWBERRY", "CHOCOLATE"].map(
                        (item, key) => (
                            <div key={key}>
                                <div className="space-y-3 text-center">
                                    <img
                                        src="/img/about-us/img-1.png"
                                        className=" inline-block h-full w-28"
                                        alt=""
                                    />
                                    <h4 className="title text-2xl">{item}</h4>
                                    <p className="font-text">
                                        Lorem ipsum dolor, sit amet consectetur
                                        adipisicing elit. Quo eius ex vel nihil
                                        corporis beatae nesciunt .
                                    </p>
                                    <Link className="title inline-block border-b-2 border-gray-800">
                                        Leer Mas
                                    </Link>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default FlavorsList2;
