import React from "react";
import TwoSection, { TwoSectionText, TwoSectionSubTitle, TwoSectionTitle } from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
const TwoSectionHours = () => {
    return (
        <TwoSection img="/img/home/img-2.jpg" reverse={true}>
            <div className="text-center">
                <TwoSectionSubTitle className="mb-1">
                    Estamos abiertos
                </TwoSectionSubTitle>
                <TwoSectionTitle>HORAS LABORALES</TwoSectionTitle>
                <TwoSectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eius- mod tempor incididunt ut labore et dolore.
                </TwoSectionText>

                <div className="space-y-3 px-8 ">
                    <div className="title flex justify-between">
                        <h6>MONDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>CLOSED</div>
                    </div>

                    <div className="title flex justify-between">
                        <h6>TUESDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>8AM-10PM</div>
                    </div>

                    <div className="title flex justify-between">
                        <h6>WEDNESDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>8AM-10PM</div>
                    </div>

                    <div className="title flex justify-between">
                        <h6>THURSDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>8AM-10PM</div>
                    </div>

                    <div className="title flex justify-between">
                        <h6>FRIDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>8AM-10PM</div>
                    </div>

                    <div className="title flex justify-between">
                        <h6>SATURDAY</h6>
                        <div className="flex-grow border-b-2  border-dotted border-gray-500 "></div>
                        <div>11AM-6PM</div>
                    </div>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionHours;
