import React from "react";

import Dropdown from "@/Components/Dropdown";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import NavLink from "@/Components/NavLink";
const ProfileDropdown = ({auth}) => {
    return (
        <div className="flex items-center space-x-2">
            <div className="relative ">
                <Dropdown>
                    <Dropdown.Trigger>
                        <span className="inline-flex">
                            <button
                                type="button"
                                className="title inline-flex items-center border border-transparent bg-white  text-sm   hover:text-gray-600 focus:outline-none"
                            >
                                {auth.user.name}
                                <ChevronDownIcon className="ml-1 h-4 w-4 " />
                                {/* <svg
                                      className="ml-2 -mr-0.5 h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                  >
                                      <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg> */}
                            </button>
                        </span>
                    </Dropdown.Trigger>

                    <Dropdown.Content>
                        <Dropdown.Link
                            href={route("logout")}
                            method="post"
                            as="button"
                        >
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
            <NavLink href={route("dashboard")} active={false}>
                <div className="flex items-center ">
                    <ShoppingBagIcon className="h-5 w-5 " />
                    <span className="ml-1">3</span>
                </div>
            </NavLink>
        </div>
    );
};

export default ProfileDropdown;
