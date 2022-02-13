import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";
import { Heading3, Heading4, Heading5, Heading6 } from "@/Components/Elements";
import Input from "@/Components/Input";
import { formatCurrency } from "@/Helpers/helpers";
import AppLayout from "@/Layouts/AppLayout";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import SelectQuantity from "../Product/SelectQuantity";
import CartItem from "./CartProduct";
import CartProductList from "./CartProductList";
import SummaryPrice from "./SummaryPrice";
import FormCodeDiscount from "./SummaryPrice";

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
                    <div className="">
                        <Heading4 > No tienes articulos en el carrito</Heading4>
                    </div>
                ) : (
                    <>
                        <CartProductList products={props.products} />

                        <SummaryPrice meta={props.meta} />

                        <div>
                            <Link className="btn btn-md">
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
