import React, { useEffect } from "react";
import Button from "@/Components/Button";

import Input from "@/Components/Input";
import Label from "@/Components/Label";
import ValidationErrors from "@/Components/ValidationErrors";
import { Link, useForm } from "@inertiajs/inertia-react";
import { Heading2 } from "@/Components/Elements";
import AppLayout from "@/Layouts/AppLayout";
export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("register"));
    };

    return (
        <AppLayout title="Registro">
            <div className="py-section container">
                <ValidationErrors errors={errors} />

                <div>
                    <Heading2 className="mb-6">Registro</Heading2>
                </div>

                <form onSubmit={submit} className="lg:w-1/2">
                    <div>
                        <Label forInput="name" value="Nombre" />

                        <Input
                            type="text"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="email" value="Email" />

                        <Input
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label forInput="password" value="Contraseña" />

                        <Input
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <Label
                            forInput="password_confirmation"
                            value="Confirmar contraseña"
                        />

                        <Input
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            handleChange={onHandleChange}
                            required
                        />
                    </div>

                    <div className="mt-4 flex items-center gap-6">
                        <Button  processing={processing}>
                            Registrar
                        </Button>

                        <Link
                            href={route("login")}
                            className="text-sm text-gray-600 underline hover:text-gray-900 font-text"
                        >
                            ¿Ya está registrado?
                        </Link>
                    </div>
                </form>
            </div>
        </AppLayout>
    );
}
