import { Link } from "@inertiajs/inertia-react";
import React from "react";
import MenuLink from "./MenuLink";
import SocialIcon from "./SocialIcon";

const Footer = () => {
    return (
        <div className="border-t border-gray-300 bg-orange-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-y-5 py-6 lg:grid-cols-3 ">
                    <div>
                        <SocialIcon className="flex space-x-3 justify-center lg:justify-start" />
                    </div>
                    <div className=" text-center font-text text-sm">
                        © 2022 Ice Cream Shop. All Rights Reserved
                    </div>
                    <div>
                        <MenuLink />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
