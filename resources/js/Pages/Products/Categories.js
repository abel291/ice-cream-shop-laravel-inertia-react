
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Layout";
const Categories = ({ categories, routePath = "products" }) => {
    return (
        <div>
            <SidebarTitle >Categorias</SidebarTitle>
            <div className="space-y-1">
                {categories.map((item, key) => (
                    <Link
                        href={route(routePath, {
                            filter_type: "category",
                            filter: item.slug,
                        })}
                        key={key}
                        className="block font-text"
                    >
                        {item.name} ({item.countData})
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Categories;
