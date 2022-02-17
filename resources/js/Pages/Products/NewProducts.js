import { formatCurrency } from "@/Helpers/helpers";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Layout";



const NewProducts = ({ products }) => {
    return (
        <div>
            <SidebarTitle >Nuevos</SidebarTitle>
            {products.map((item, key) => (
                <div key={key} className="mb-5 flex">
                    <img
                        src={item.img}
                        className="h-20 w-20 object-cover"
                        alt="products"
                    />
                    <div className="ml-3 flex items-center font-text ">
                        <div>
                            <Link
                                href={route("product", { slug: item.slug })}
                                className="mb-2 block"
                            >
                                {item.name}
                            </Link>
                            <span className="block text-sm text-gray-500">
                                {formatCurrency(1.6)}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewProducts;
