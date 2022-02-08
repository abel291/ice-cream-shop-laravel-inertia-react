import React, { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/inertia-react";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
    const { auth } = usePage().props;
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);
    return (
        <nav className="border-b border-gray-100 bg-white ">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-24 items-center justify-between">
                    <div className="flex">
                        <div className="hidden space-x-5 sm:flex ">
                            <NavLink
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href={route("about-us")}
                                active={route().current("about-us")}
                            >
                                Acerca de
                            </NavLink>
                            <NavLink href={"/DDD"} active={false}>
                                Blog
                            </NavLink>
                            <NavLink
                                href={route("products")}
                                active={route().current("products")}
                            >
                                Helados
                            </NavLink>
                        </div>
                    </div>
                    <div>
                        <Link href="/">
                            <ApplicationLogo className="block h-14 w-auto" />
                        </Link>
                    </div>

                    <div className="hidden sm:flex sm:items-center">
                        {auth.user && <ProfileDropdown auth={auth} />}
                        <button className="btn btn-md ml-6">Orden</button>
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
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
                    " sm:hidden"
                }
            >
                <div className="space-y-1 pt-2 pb-3">
                    <ResponsiveNavLink
                        href={route("dashboard")}
                        active={route().current("dashboard")}
                    >
                        Dashboard
                    </ResponsiveNavLink>
                </div>
                {auth.user && (
                    <div className="border-t border-gray-200 pt-4 pb-1">
                        <div className="px-4">
                            <div className="text-base font-medium ">
                                {auth.user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {auth.user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink
                                method="post"
                                href={route("logout")}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
