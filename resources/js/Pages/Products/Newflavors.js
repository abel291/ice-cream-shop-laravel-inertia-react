import { formatCurrency } from "@/Helpers/helpers";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Sidebar";


const Newflavors = ({ data }) => {
    return (
        <div>
            <SidebarTitle>Nuevos sabores</SidebarTitle>
            {data.map((item, key) => (
                <div key={key} className="mb-5 flex">
                    <img
                        src={"/img/products/img-" + item + ".jpg"}
                        className="h-24 w-24 object-cover"
                        alt="products"
                    />
                    <div className="ml-3 flex items-center font-text ">
                        <div>
                            <Link className="mb-2 block">Dark cocoa</Link>
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

export default Newflavors;
