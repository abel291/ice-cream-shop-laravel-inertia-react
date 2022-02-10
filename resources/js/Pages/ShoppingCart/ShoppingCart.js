import Breadcrumbs from "@/Components/Breadcrumbs";
import Button from "@/Components/Button";
import { Heading3, Heading5, Heading6 } from "@/Components/Elements";
import Input from "@/Components/Input";
import { formatCurrency } from "@/Helpers/helpers";
import AppLayout from "@/Layouts/AppLayout";
import { XIcon } from "@heroicons/react/solid";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import SelectQuantity from "../Product/SelectQuantity";

const ShoppingCart = () => {
    return (
        <AppLayout title="Carrito de compra">
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    { name: "Carrito de compras" },
                ]}
            />
            <div className="py-section container">
                <table className="mb-8 w-full table-auto ">
                    <thead>
                        <tr className="border-b border-gray-200">
                            <th className="w-10 py-4 px-2 text-left">&nbsp;</th>
                            <th className="hidden w-20 py-4 px-2 text-left md:table-cell">
                                &nbsp;
                            </th>
                            <th className="py-4 px-2 text-left">
                                <Heading5> Productos</Heading5>
                            </th>
                            <th className="py-4 px-2 text-left">
                                <Heading5> Precio</Heading5>
                            </th>
                            <th className="py-4 px-2 text-left">
                                <Heading5> Cantidad</Heading5>
                            </th>
                            <th className="hidden py-4 px-2 text-left md:table-cell">
                                <Heading5> Subtotal</Heading5>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {[1, 2, 3].map((item, key) => (
                            <tr key={key} className="border-b border-gray-300">
                                <td className="items-center py-4 px-2">
                                    <XIcon className="h-5 w-5" />
                                </td>
                                <td className="hidden py-4 md:table-cell">
                                    <img
                                        src="/img/home/img-1.jpg"
                                        className="h-16 w-16"
                                        alt=""
                                    />
                                </td>
                                <td className="py-4 px-2">
                                    <Heading6>Vainilla</Heading6>
                                </td>
                                <td className="py-4 px-2 font-text">
                                    {formatCurrency(1.5)}
                                </td>
                                <td className="py-4 px-2 font-text">
                                    <SelectQuantity quantity={1} stock={4} />
                                </td>
                                <td className="hidden py-4 px-2 font-text md:table-cell">
                                    {formatCurrency(1.5)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mb-20 flex gap-x-2">
                    <Input placeholder="Codigo Cupon " type="text" />
                    <Button className="btn btn-md">Aplicar cupon</Button>
                </div>
                <div className="mb-5">
                    <Heading3 className="mb-10">TOTALES DEL CARRITO</Heading3>
                    <table className="w-full">
                        <tbody>
                            <tr className="border-b border-gray-200">
                                <td className="md:w-1/5 py-4 px-2">
                                    <Heading5> Sub total </Heading5>
                                </td>
                                <td className="py-4 px-2 font-text">
                                    {formatCurrency(2.45)}
                                </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                                <td className="md:w-1/5 py-4 px-2">
                                    <Heading5> Total </Heading5>
                                </td>
                                <td className="py-4 px-2 font-text font-bold">
                                    {formatCurrency(2.45)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <Link className="btn btn-md">Pasar por la caja</Link>
                </div>
            </div>
        </AppLayout>
    );
};

export default ShoppingCart;
