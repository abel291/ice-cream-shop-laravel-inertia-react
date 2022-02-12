import { Link } from "@inertiajs/inertia-react";
import React from "react";

import { SidebarTitle } from "./Sidebar";

const Tags = ({ tags }) => {
    return (
        <div>
            <SidebarTitle>Tags</SidebarTitle>
            <div className="flex flex-wrap gap-2 text-sm">
                {tags.data.map((item, key) => (
                    <Link
                        href={route("products", {
                            filter_type: "tag",
                            filter: item.slug,
                        })}
                        key={key}
                        className="inline-block bg-orange-50 px-2 py-1 font-text"
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Tags;
