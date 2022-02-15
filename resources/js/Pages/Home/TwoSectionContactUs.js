import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import TwoSection, {
    TwoSectionText,
    TwoSectionSubTitle,
    TwoSectionTitle,
} from "@/Components/TwoSection";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const TwoSectionContactUs = () => {
    return (
        <TwoSection img="/img/home/img-4.jpg" reverse={true}>
            <div className="text-center">

                <TwoSectionSubTitle className="mb-1">
                    Contáctenos
                </TwoSectionSubTitle>

                <TwoSectionTitle>DI HOLA</TwoSectionTitle>

                <TwoSectionText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eius- mod tempor incididunt ut labore et dolore.
                </TwoSectionText>

                <div className="mb-10 lg:px-10">
                    <form action="" className="space-y-3">
                        <Input
                            required={true}
                            name="name"
                            placeholder="Nombre"
                        />
                        <Input
                            required={true}
                            name="email"
                            placeholder="Email"
                        />
                        <Textarea
                            required={true}
                            name="name"
                            placeholder="Mensaje"
                        />
                    </form>
                </div>

                <div >
                    <Link href="#" className="btn btn-md">
                        Enviar mensaje
                    </Link>
                </div>
            </div>
        </TwoSection>
    );
};

export default TwoSectionContactUs;
