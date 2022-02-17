import React from "react";
import Categories from "./Categories";
import Tags from "./Tags";

import FollowUs from "./FollowUs";
import NewProducts from "./NewProducts";

const Sidebar = ({ children }) => {
    return (
        <div className="space-y-10">
            {children}
        </div>
    );
};



export default Sidebar;
