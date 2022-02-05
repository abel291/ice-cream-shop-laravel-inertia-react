import { Link } from "@inertiajs/inertia-react";
import React from "react";

const Footer = () => {
    return (
        <div className="border-t border-gray-300 bg-orange-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center py-6 ">
                    <div className=" w-1/3 ">redes</div>
                    <div className=" w-1/3 font-text text-sm text-center">
                        © 2022 Ice Cream Shop. All Rights Reserved
                    </div>
                    <div className=" w-1/3 ">
                        <div className="title flex justify-end space-x-5 text-sm">
                            <Link
                                href={route("home")}
                                active={route().current("home")}
                            >
                                Home
                            </Link>
                            <Link href={"/DDD"} active={false}>
                                Acerca de
                            </Link>
                            <Link href={"/DDD"} active={false}>
                                Blog
                            </Link>
                            <Link href={"/DDD"} active={false}>
                                Helados
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
