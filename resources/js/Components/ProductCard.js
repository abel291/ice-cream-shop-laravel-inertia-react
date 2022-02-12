import { formatCurrency } from "@/Helpers/helpers";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { Heading3, Heading4, Heading5 } from "./Elements";

const ProductCard = ({ product }) => {
    return (
        <Link href={route("product", { slug: product.slug })}>
            <div>
                <div className="relative">
                    <img
                        className="h-full w-full rounded object-cover md:h-80 md:w-80 lg:h-60 lg:w-72"
                        src={product.img}
                        alt={product.name}
                    />
                    <div className=" absolute inset-0 opacity-0 transition-all duration-500 hover:opacity-100">
                        <div className="absolute inset-0 bg-orange-100 opacity-80 "></div>

                        {/* <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex space-x-3">
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                                <div className="flex h-8 w-8 items-center justify-center bg-gray-800 text-white">
                                    f
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="pt-5 pb-10">
                    <div className=" text-center">
                        <Heading4 className="mb-2 w-full truncate">
                            {product.name}
                        </Heading4>

                        <p className="mb-3 font-text text-sm">
                            {product.description_min}
                        </p>
                        <Heading5>{formatCurrency(product.price)}</Heading5>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
