import React from "react";
import Categories from "./Categories";
import Tags from "./Tags";
import Newflavors from "./Newflavors";
import FollowUs from "./FollowUs";

const Sidebar = ({ categories, tags, flavors }) => {
    return (
        <div className="space-y-10">
            <Newflavors data={flavors} />
            <Categories data={categories} />
            <Tags data={tags} />
            <FollowUs />
        </div>
    );
};

export const SidebarTitle = ({ children }) => {
    return <h5 className="title mb-5 text-xl">{children}</h5>;
};

export default Sidebar;
