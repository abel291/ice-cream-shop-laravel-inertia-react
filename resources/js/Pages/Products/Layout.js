import { Heading5 } from "@/Components/Elements";
import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col-reverse gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
            {children}
        </div>
    );
};

export const Sidebar = ({ children }) => {
    return (
        <div className="w-full lg:w-3/12">
            
            <div className="space-y-10">{children}</div>
        </div>
    );
};
export const SidebarTitle = ({ children }) => {
    return <Heading5 className="mb-4">{children}</Heading5>;
};

export default Layout;
