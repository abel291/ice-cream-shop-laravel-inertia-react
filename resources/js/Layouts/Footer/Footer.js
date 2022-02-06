import { Link } from "@inertiajs/inertia-react";
import React from "react";
import MenuLink from "./MenuLink";
import SocialIcon from "./SocialIcon";

const Footer = () => {
    return (
        <div className="border-t border-gray-300 bg-orange-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center py-6 ">
                    <div className=" w-1/3 ">
                        <SocialIcon />
                    </div>
                    <div className=" w-1/3 text-center font-text text-sm">
                        © 2022 Ice Cream Shop. All Rights Reserved
                    </div>
                    <div className=" w-1/3 ">
                        <MenuLink />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
