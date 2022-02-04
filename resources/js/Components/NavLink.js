import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    return (
        <Link
            href={href}
            className={
                "inline-flex items-center text-sm focus:outline-none title " +
                (active
                    ? "text-gray-300 "
                    : "text-gray-800 hover:text-gray-300")
            }
        >
            {children}
        </Link>
    );
}
