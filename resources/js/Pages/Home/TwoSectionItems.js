import TwoSection, {
    TwoSectionSubTitle,
    TwoSectionText,
    TwoSectionTitle,
} from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSectionItems = () => {
    return (
        <TwoSection img="/img/home/img-3.jpg">
            <div className="text-center">
                <TwoSectionTitle>LOS MEJORES HELADOS</TwoSectionTitle>
                <TwoSectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eius- mod tempor incididunt ut labore et dolore.
                </TwoSectionText>
                <TwoSectionSubTitle className="mb-16">
                    Básico y especiale
                </TwoSectionSubTitle>

                <div>
                    <Link href="#" className="btn btn-md">
                        Ver Mas
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionItems;
