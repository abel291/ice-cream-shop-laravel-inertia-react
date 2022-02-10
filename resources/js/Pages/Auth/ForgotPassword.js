import React from "react";
import Button from "@/Components/Button";

import Input from "@/Components/Input";
import ValidationErrors from "@/Components/ValidationErrors";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Heading2 } from "@/Components/Elements";
import AppLayout from "@/Layouts/AppLayout";
import Label from "@/Components/Label";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <AppLayout title="Contraseña">
            <div className="py-section container">
                {status && (
                    <div className="mb-4 text-sm font-medium text-green-600">
                        {status}
                    </div>
                )}

                <ValidationErrors errors={errors} />

                <div>
                    <Heading2 className="mb-6">Has olvidado tu contraseña</Heading2>
                </div>

                <form onSubmit={submit} className="lg:w-1/2">
                    <div className="mb-4 font-text text-sm leading-normal text-gray-500">
                        ¿Ha olvidado su contraseña? No hay problema. Simplemente
                        háganos saber su dirección de correo electrónico y le
                        enviaremos por correo electrónico un enlace de
                        restablecimiento de contraseña que le permitirá elegir
                        uno nuevo.
                    </div>
                    <div>
                        <Label forInput="email" value="Correo electrónico *" />
                        <Input
                            type="text"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            handleChange={onHandleChange}
                        />
                    </div>

                    <div className="mt-4 flex items-center">
                        <Button className="btn btn-md" processing={processing}>
                            restablecimiento de contraseña
                        </Button>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
