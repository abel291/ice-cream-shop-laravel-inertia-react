import { Link } from "@inertiajs/inertia-react";
import React from "react";

const MenuLink = () => {
    return (
        <div className="title flex justify-end space-x-5 text-sm">
            <Link href={route("home")}>Home</Link>
            <Link href={route("home")}>Acerca de</Link>
            <Link href={route("home")}>Blog</Link>
            <Link href={route("home")}>Helados</Link>
        </div>
    );
};

export default MenuLink;
