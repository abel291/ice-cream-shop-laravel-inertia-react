import { Heading2 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import React from "react";
import Products from "../Products/Products";

const FlavorsList = ({ products }) => {
    return (
        <div className="py-section container">
            <div className="mb-14 text-center">
                <p className="mb-1 font-script text-4xl text-gray-400 lg:text-5xl">
                    Helados
                </p>
                <Heading2 className=" mb-5 ">
                    Sabores de helado veganos
                </Heading2>
                <p className="font-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et
                </p>
            </div>
            <div className="">
                <div className=" grid gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3">
                    {products.map((item, key) => (
                        <div key={key}>
                            <div className="title mb-2 flex">
                                <h6 className="">{item.name}</h6>
                                <div className="flex-grow border-b-2  border-dotted border-gray-700 "></div>
                                <div className="">
                                    {formatCurrency(item.price)}
                                </div>
                            </div>
                            <div className="font-text ">
                                {item.description_min}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FlavorsList;
