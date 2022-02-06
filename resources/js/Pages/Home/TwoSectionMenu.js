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
                <div className="mb-10 grid grid-cols-2 gap-x-14 gap-y-5 text-left">
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
                            <div className="title mb-1 flex">
                                <h6 className="">{item}</h6>
                                <div className="flex-grow border-b-2  border-dotted border-gray-700 "></div>
                                <div className="">$2</div>
                            </div>
                            <div className="font-text text-sm">Lorem ipsum dolor es umi</div>
                        </div>
                    ))}
                </div>
                <div className="">
                    <Link href="#" className="btn btn-md">
                        Ver Mas
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionMenu;
