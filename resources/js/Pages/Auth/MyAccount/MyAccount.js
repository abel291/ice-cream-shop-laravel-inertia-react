import { Heading3 } from "@/Components/Elements";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Layout from "./Layout";

const MyAccount = () => {
    return (
        <Layout title="Dashboard">
            <div className="font-text">
                Desde el panel de control de su cuenta, puede ver sus ,
                administrar los
                <Link href={route("orders")} className="px-1 font-bold underline ">
                    pedidos recientes
                </Link>
                , administrar los
                <Link
                    href={route("account-details")}
                    className="px-1 font-bold underline "
                >
                    detalles de su cuenta
                </Link>
                y
                <Link href={route("change-password")} className="px-1 font-bold underline ">
                    cambiar su contraseña.
                </Link>
                .
            </div>
        </Layout>
    );
};

export default MyAccount;
