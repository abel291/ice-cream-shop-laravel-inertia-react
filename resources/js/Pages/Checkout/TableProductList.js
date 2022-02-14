import { Heading5 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import React from "react";

const TableProductList = ({ products, subTotal, discount, total }) => {
    return (
        <table className="w-full table-fixed">
            <thead>
                <tr>
                    <th className="py-4 px-2 text-left">
                        <Heading5>Pedido</Heading5>
                    </th>
                    <th className="py-4 px-2 text-left">
                        <Heading5>Monto</Heading5>
                    </th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200  font-text">
                {products.map((product, index) => (
                    <tr key={index}>
                        <td className=" p-4 text-left">
                            {product.quantity} x {product.name}
                        </td>
                        <td className=" p-4 text-left">
                            {formatCurrency(product.total_price_quantity)}
                        </td>
                    </tr>
                ))}
                <tr className=" bg-gray-100 italic">
                    <td className="p-4 text-left">Metodo de pago</td>
                    <td className="p-4 text-left">Contra entrega</td>
                </tr>
                <tr className=" bg-gray-100 italic">
                    <td className="p-4 text-left">Subtotal</td>
                    <td className="p-4 text-left">
                        {formatCurrency(subTotal)}
                    </td>
                </tr>

                {discount && (
                    <tr className="bg-gray-100 font-semibold italic text-green-500">
                        <td className="p-4 text-left ">Descuento</td>
                        <td className="p-4 text-left">
                            -{formatCurrency(discount.applied)}
                        </td>
                    </tr>
                )}
                {/* <tr className="font-semibold italic">
                            <td className="p-4 text-left ">
                                Impuestos ({order.tax_percent}%)
                            </td>
                            <td className="p-4 text-left">
                                {formatCurrency(order.tax_amount)}
                            </td>
                        </tr>
                        <tr className="font-semibold italic">
                            <td className="p-4 text-left ">Envio</td>
                            <td className="p-4 text-left">
                                {formatCurrency(order.shipping)}
                            </td>
                        </tr> */}
                <tr className="bg-gray-100 text-xl font-bold">
                    <td className="p-4 text-left ">Total</td>
                    <td className="p-4 text-left">{formatCurrency(total)}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default TableProductList;
