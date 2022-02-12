import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Sidebar";

const Categories = ({ categories }) => {
    return (
        <div>
            <SidebarTitle>Categorias</SidebarTitle>
            <div className="space-y-1">
                {categories.data.map((item, key) => (
                    <Link
                        href={route("products", {
                            filter_type: "category",
                            filter: item.slug,
                        })}
                        key={key}
                        className="block font-text"
                    >
                        {item.name} ({item.productsCount})
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
