import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { SidebarTitle } from "./Layout";

const Tags = ({ tags, routePath = "products" }) => {
    return (
        <div>
            <SidebarTitle>Tags</SidebarTitle>
            <TagList tags={tags} routePath={routePath} />
        </div>
    );
};

export const TagList = ({ tags, routePath }) => {
    return (
        <div className="flex flex-wrap gap-2 text-sm">
            {tags.map((item, key) => (
                <Link
                    href={route(routePath, {
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
    );
};
{
    /* <Link
                        href={route(routePath, {
                            filter_type: "tag",
                            filter: item.slug,
                        })}
                        key={key}
                        className="inline-block bg-orange-50 px-2 py-1 font-text"
                    >
                        {item.name}
                    </Link> */
}
export default Tags;
