import Breadcrumbs from "@/Components/Breadcrumbs";

import { Heading2, Heading3, Heading4, Heding5 } from "@/Components/Elements";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import CartProductList from "./CartProductList";
import SummaryPrice from "./SummaryPrice";

const ShoppingCart = (props) => {
    return (
        <AppLayout title="Carrito de compra">
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    { name: "Carrito de compras" },
                ]}
            />

            <div className="py-section container">
                {props.products.length === 0 ? (
                    <div className=" text-center">
                        <p className="font-script text-4xl text-gray-400 lg:text-5xl">
                            Pon algo en la bolsa
                        </p>
                        <Heading2>SU CARRITO ESTÁ VACÍO.</Heading2>
                        <p className="mb-10 mt-8 font-text">
                            Parece que aún no has hecho tu elección...
                        </p>
                        <Link href={route('products')} className="btn btn-md">volver a la tienda</Link>
                    </div>
                ) : (
                    <>
                        <CartProductList products={props.products} />

                        <SummaryPrice meta={props.meta} />

                        <div>
                            <Link
                                href={route("checkout")}
                                className="btn btn-md"
                            >
                                Pasar por la caja
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </AppLayout>
    );
};

export default ShoppingCart;
