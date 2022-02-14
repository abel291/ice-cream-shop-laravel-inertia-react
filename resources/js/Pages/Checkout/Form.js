import { Heading3 } from "@/Components/Elements";
import Input from "@/Components/Input";
import Textarea from "@/Components/Textarea";
import { usePage } from "@inertiajs/inertia-react";

import React from "react";

const Form = ({ data, setData }) => {
    const { auth } = usePage().props;
    const onHandleChange = (e) => {
        let target = e.target;
        setData(target.name, target.value);
    };
    return (
        <div className="mb-14 grid gap-8 lg:grid-cols-2">
            <div className="space-y-5">
                <Heading3>DETALLES DE FACTURACIÓN</Heading3>
                <div>
                    <label className="font-text text-sm" htmlFor="name">
                        Nombre
                    </label>
                    <Input
                        className="disabled:bg-gray-200 disabled:text-gray-400"
                        disabled={true}
                        value={auth.user.name}
                        name="name"
                    />
                </div>
                <div>
                    <label className="font-text text-sm" htmlFor="email">
                        Email
                    </label>
                    <Input
                        className="disabled:bg-gray-200 disabled:text-gray-400"
                        disabled={true}
                        value={auth.user.email}
                        name="email"
                        type="email"
                    />
                </div>
                <div>
                    <label className="font-text text-sm" htmlFor="address">
                        Direccion
                    </label>
                    <Input
                        handleChange={onHandleChange}
                        value={data.address}
                        name="address"
                    />
                </div>
                <div>
                    <label className="font-text text-sm" htmlFor="phone">
                        Telefono
                    </label>
                    <Input
                        handleChange={onHandleChange}
                        value={data.phone}
                        name="phone"
                    />
                </div>
            </div>
            <div className="space-y-5">
                <Heading3>INFORMACIÓN ADICIONAL</Heading3>
                <div>
                    <label className="font-text text-sm" htmlFor="name">
                        Notas de pedido (opcional)
                    </label>
                    <Textarea
                        name="note"
                        handleChange={onHandleChange}
                        value={data.note}
                    ></Textarea>
                </div>
            </div>
        </div>
    );
};

export default Form;
