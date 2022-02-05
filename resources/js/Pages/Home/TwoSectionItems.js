import TwoSection from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSectionItems = () => {
    return (
        <TwoSection img="/img/home/img-3.jpg">
            <div className="text-center">
                <h3 className="title mb-7 w-full  text-4xl">
                    LOS MEJORES HELADOS
                </h3>
                <p className="mb-7 font-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eius- mod tempor incididunt ut labore et dolore.
                </p>
                <p className="mb-16  font-sacramento text-6xl text-gray-400">
                    Básico y especiale
                </p>

                <div >
                    <Link href="#" className="btn btn-md">
                        Ver Mas
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionItems;
