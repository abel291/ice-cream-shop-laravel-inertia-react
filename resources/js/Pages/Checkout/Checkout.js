import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";

import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Form from "./Form";

import YourOrder from "./YourOrder";

const Checkout = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        address: "",
        phone: "",
        email: "",
        note: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        //post("/checkout", { preserveScroll: true });
    };
    return (
        <AppLayout title="Checkout">
            <Breadcrumbs
                data={[
                    { path: route("/shopping-cart.index"), name: "Carrito" },
                    { name: "Checkout" },
                ]}
            />
            <div className="py-section container">
                <div>
                    <Form data={data} setData={setData} />
                    <YourOrder />
                    <p className="mb-10 font-text">
                        Sus datos personales se utilizarán para procesar su
                        pedido, respaldar su experiencia en este sitio web y
                        para otros fines descritos en nuestra política de
                        privacidad.
                    </p>
                    <Button
                        onClick={handleSubmit}
                        processing={processing}
                        type="button"
                        className="btn btn-md"
                    >
                        Realizar pedido
                    </Button>
                </div>
            </div>
        </AppLayout>
    );
};

export default Checkout;
