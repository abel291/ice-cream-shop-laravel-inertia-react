import { formatCurrency } from "@/Helpers/helpers";
import React from "react";

const ProductsList = ({ data }) => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, key) => (
                <div>
                    <div>
                        <img
                            className="h-full  w-full object-cover lg:w-72"
                            src={"/img/products/img-" + item + ".jpg"}
                            alt="products"
                        />
                    </div>
                    <div className="pt-5 pb-10">
                        <div className=" text-center">
                            <h4 className="title mb-1 text-2xl">CHOCO GLAZE</h4>
                            <p className="mb-2 font-text text-sm">
                                Now with chocolate chips!
                            </p>
                            <span className="title inline-block">
                                {formatCurrency(3.85)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
