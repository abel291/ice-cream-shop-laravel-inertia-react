import React from "react";
import Categories from "./Categories";
import Tags from "./Tags";

import FollowUs from "./FollowUs";
import NewProducts from "./NewProducts";

const Sidebar = ({ categories, tags, newProducts }) => {
    return (
        <div className="space-y-10">
            <NewProducts products={newProducts} />
            <Categories categories={categories} />
            <Tags tags={tags} />
            <FollowUs />
        </div>
    );
};

export const SidebarTitle = ({ children }) => {
    return <h5 className="title mb-5 text-xl">{children}</h5>;
};

export default Sidebar;
