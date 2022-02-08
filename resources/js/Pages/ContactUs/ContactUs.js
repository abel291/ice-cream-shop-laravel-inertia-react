import Banner from "@/Components/Banner";
import Button from "@/Components/Button";
import { TitleH2, SubtTile, Text } from "@/Components/Elements";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import TwoSection from "@/Components/TwoSection";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import AddressList from "./AddressList";
import Form from "./Form";
import Map from "./Map";

const ContactUs = () => {
    return (
        <AppLayout title="Contacto">
            <Banner
                img="/img/contact-us/banner.jpg"
                subTitle="Pocas Palabra"
                title="Contacto"
            />

            <AddressList />
            <Map />
            <Form />
        </AppLayout>
    );
};

export default ContactUs;
