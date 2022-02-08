import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Sidebar";


const Tags = ({ data }) => {
    return (
        <div>
            <SidebarTitle>Tags</SidebarTitle>
            <div className="flex flex-wrap gap-2 text-sm">
                {data.map((item, key) => (
                    <Link key={key} className="inline-block px-2 py-1 font-text bg-orange-50">
                        {item}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tags;
