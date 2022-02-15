import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";
import { Heading3 } from "@/Components/Elements";
import ValidationErrors from "@/Components/ValidationErrors";

import AppLayout from "@/Layouts/AppLayout";
import { useForm } from "@inertiajs/inertia-react";
import React from "react";
import Form from "./Form";
import TableProductList from "./TableProductList";

import YourOrder from "./YourOrder";

const Checkout = (props) => {
    const { data, setData, post, processing, errors } = useForm({
        address: props.auth.user.address,
        phone: props.auth.user.phone,
        note: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        post(route("checkout_store"), { preserveScroll: true });
    };
    return (
        <AppLayout title="Checkout">
            <Breadcrumbs
                data={[
                    { path: route("shopping-cart.index"), name: "Carrito" },
                    { name: "Checkout" },
                ]}
            />
            <div className="py-section container">
                <ValidationErrors errors={errors} />
                <div>
                    <Form data={data} setData={setData} />
                    <div className="mb-10">
                        <Heading3 className="mb-4">SU PEDIDO</Heading3>
                        <TableProductList
                            products={props.products}
                            subTotal={props.meta.sub_total}
                            discount={props.meta.discount}
                            total={props.meta.total}
                        />
                    </div>
                    <p className="mb-10 font-text">
                        Sus datos personales se utilizarán para procesar su
                        pedido, respaldar su experiencia en este sitio web y
                        para otros fines descritos en nuestra política de
                        privacidad.
                    </p>
                    <div onClick={handleSubmit}>
                        <Button processing={processing} type="button">
                            Realizar pedido
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Checkout;
