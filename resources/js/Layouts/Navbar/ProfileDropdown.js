import React from "react";

import Dropdown from "@/Components/Dropdown";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import NavLink from "@/Components/NavLink";
const ProfileDropdown = ({ auth }) => {
    return (
        <div className="flex items-center gap-6">
            <div className="relative ">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex ">
                            <button
                                type="button"
                                className="title inline-flex items-center border border-transparent bg-white  text-sm   hover:text-gray-600 focus:outline-none"
                            >
                                {auth.user.name}
                                <ChevronDownIcon className="ml-1 h-4 w-4 " />
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link href={route("my-account")} method="get">
                            Mi cuenta
                        </Dropdown.Link>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
                            Salir
                        </Dropdown.Link>
                    </Dropdown.Content>
                </Dropdown>
            </div>
            <NavLink href={route("shopping-cart.index")} active={false}>
                <div className="flex items-center ">
                    <ShoppingBagIcon className="h-5 w-5 " />
                </div>
            </NavLink>
        </div>
    );
};

export default ProfileDropdown;
