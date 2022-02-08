import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Sidebar";


const Categories = ({data}) => {
    return (
        
            <div>
                <SidebarTitle>Categorias</SidebarTitle>
                <div className="space-y-1">
                    {data.map((item, key) => (
                        <Link key={key} className="block font-text">
                            {item} ({key})
                        </Link>
                    ))}
                </div>
            </div>
       
    );
};

export default Categories;
