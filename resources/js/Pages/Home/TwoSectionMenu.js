import TwoSection, {
    TwoSectionSubTitle,
    TwoSectionTitle,
} from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
import React from "react";


const TwoSectionMenu = () => {
    return (
        <TwoSection img="/img/home/img-1.jpg">
            <div className="text-center">
                <TwoSectionSubTitle className="mb-1">
                    Ice cream
                </TwoSectionSubTitle>
                <TwoSectionTitle>SABOR DELICIOSO</TwoSectionTitle>
                <div className="mb-10 grid gap-x-14 gap-y-5 text-left md:grid-cols-2">
                    {[
                        "APPLE",
                        "BLUEBERRY",
                        "STRAWBERRY",
                        "CHOCOLATE",
                        "ORANGE",
                        "PLUM",
                        "VANILLA",
                        "PISTACHIO",
                    ].map((item) => (
                        <div key={item}>
                            <div className="title mb-2 flex">
                                <h6>{item}</h6>
                                <div className="flex-grow border-b-2  border-dotted border-gray-700 "></div>
                                <div>$2</div>
                            </div>
                            <div className="font-text text-sm">
                                Lorem ipsum dolor es umi
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <Link href={route("products")} className="btn btn-md">
                        Ver Mas
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionMenu;
