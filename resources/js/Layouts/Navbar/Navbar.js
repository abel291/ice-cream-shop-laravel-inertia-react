import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileDropdown from "./ProfileDropdown";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import { Heading6 } from "@/Components/Elements";
import Button from "@/Components/Button";

const Navbar = () => {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    const linksNavbar = [
        {
            route: "home",
            title: "Inicio",
        },
        {
            route: "about-us",
            title: "Acerca de",
        },
        {
            route: "about-us",
            title: "Blog",
        },
        {
            route: "products",
            title: "Helados",
        },
    ];

    return (
        <nav className="border-b border-gray-100 bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid h-16 grid-cols-3 items-center justify-between lg:h-20">
                    <div className="flex">
                        <div className="hidden lg:flex lg:gap-6 ">
                            {linksNavbar.map((item, key) => (
                                <NavLink
                                    key={key}
                                    href={route(item.route)}
                                    active={route().current(item.route)}
                                >
                                    <Heading6>{item.title}</Heading6>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div>
                        <Link href="/">
                            <ApplicationLogo className="mx-auto block h-14 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden gap-6 lg:flex lg:items-center lg:justify-end ">
                        {auth.user ? (
                            <ProfileDropdown auth={auth} />
                        ) : (
                            <Link className="btn btn-md " href={route("login")}>
                                Login
                            </Link>
                        )}
                    </div>

                    <div className="-mr-2 flex items-center justify-end lg:hidden">
                        <button
                            onClick={() =>
                                setShowingNavigationDropdown(
                                    (previousState) => !previousState
                                )
                            }
                            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    className={
                                        !showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                                <path
                                    className={
                                        showingNavigationDropdown
                                            ? "inline-flex"
                                            : "hidden"
                                    }
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div
                className={
                    (showingNavigationDropdown ? "block" : "hidden") +
                    " lg:hidden"
                }
            >
                <div className="space-y-1 pt-2 pb-3">
                    {linksNavbar.map((item, key) => (
                        <ResponsiveNavLink
                            key={key}
                            href={route(item.route)}
                            active={route().current(item.route)}
                        >
                            <Heading6>{item.title}</Heading6>
                        </ResponsiveNavLink>
                    ))}
                </div>
                {auth.user && (
                    <div className="border-t border-gray-200 pt-4 pb-1">
                        <div className="px-4">
                            <Heading6>{auth.user.name}</Heading6>

                            <div>
                                <span className="font-text text-sm text-gray-500">
                                    {auth.user.email}
                                </span>
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                <Heading6>Salir</Heading6>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
