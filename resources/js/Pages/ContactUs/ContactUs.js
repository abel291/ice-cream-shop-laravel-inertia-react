import Banner from "@/Components/Banner";
import Button from "@/Components/Button";
import { TitleH2, SubtTile, Text } from "@/Components/Elements";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import TwoSection from "@/Components/TwoSection";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const ContactUs = () => {
    return (
        <AppLayout title="Contacto">
            <Banner
                img="/img/contact-us/banner.jpg"
                subTitle="Pocas Palabra"
                title="Contacto"
            />

            <div className="bg-orange-50">
                <div className="py-section container">
                    <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-4">
                        {[1, 2, 3, 4].map((item, key) => (
                            <div key={key} className="text-center">
                                <h4 className="title mb-4 text-2xl">
                                    RUE DES MARTYRS
                                </h4>
                                <p className="font-text leading-7">
                                    Cl. 13 #esquina, Paris, France <br />
                                    heladeria@heladeria.com <br />+ 123 456 7890
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <div>
                <iframe
                    className="w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.467914708398!2d-72.3989182858975!3d5.345316137220685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6b0c4b78edf2a9%3A0xbe05b78b05c764c5!2sHeladeria%20Daiquiri!5e0!3m2!1ses!2sco!4v1644302200756!5m2!1ses!2sco"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </div> */}
            <div className="py-section container">
                <div className="flex flex-col gap-y-8 md:flex-row md:gap-y-0">
                    <div className="w-full md:w-1/2 lg:w-1/3  ">
                        <img
                            src="/img/contact-us/form-contact.jpg"
                            className="h-full w-full object-cover"
                            alt="contact"
                        />
                    </div>
                    <div className="w-full md:w-1/2 lg:w-2/3 ">
                        <div className=" md:pl-10 lg:pl-16">
                            <p className="mb-1 font-script text-4xl text-gray-400 lg:text-5xl ">
                                Contáctenos
                            </p>
                            <h3 className="title mb-5 text-3xl lg:text-4xl">
                                Escríbanos un mensaje
                            </h3>
                            <p className="mb-10 font-text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing.
                            </p>
                            <form action="">
                                <div className="mb-10 grid gap-5 md:grid-cols-2">
                                    <Input
                                        required={true}
                                        name="name"
                                        placeholder="Nombre"
                                    />
                                    <Input
                                        required={true}
                                        name="last_name"
                                        placeholder="Apellido"
                                    />
                                    <Input
                                        required={true}
                                        name="email"
                                        placeholder="Email"
                                    />
                                    <Input
                                        required={true}
                                        name="website"
                                        placeholder="Website"
                                    />
                                    <div className="md:col-span-2">
                                        <Textarea
                                            required={true}
                                            name="message"
                                            placeholder="Mensaje"
                                        />
                                    </div>
                                </div>
                                <Button className="btn btn-md">
                                    Enviar mensaje{" "}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="bg-orange-50">
                <div className="py-section container max-w-5xl">
                    <div className="mb-14 text-center">
                        <SubtTile>Helados</SubtTile>
                        <TitleH2> Sabores de helado veganos</TitleH2>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit sed do eiusmod tempor incididunt ut labore et
                            doloremagna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit.
                        </Text>
                    </div>
                </div>
            </div> */}

            {/* <TwoSection img="/img/home/img-1.jpg">
                <div className="text-center">
                    <SubtTile className="mb-1">Heladeria</SubtTile>
                    <TitleH2>RUE DES MARTYRS 13</TitleH2>
                    <p className="mb-7 font-text text-lg leading-8">
                        Cl. 13 #esquina, Paris, France <br />
                        heladeria@heladeria.com <br />+ 123 456 7890
                    </p>
                    <Link className="btn btn-md">Contacto</Link>
                </div>
            </TwoSection>

            <TwoSection img="/img/home/img-1.jpg" reverse={true}>
                <div className="text-center">
                    <SubtTile className="mb-1">Heladeria</SubtTile>
                    <TitleH2>RUE DES MARTYRS 13</TitleH2>
                    <p className="mb-7 font-text text-lg leading-8">
                        Cl. 13 #esquina, Paris, France <br />
                        heladeria@heladeria.com <br />+ 123 456 7890
                    </p>
                    <Link className="btn btn-md">Contacto</Link>
                </div>
            </TwoSection> */}
        </AppLayout>
    );
};

export default ContactUs;
