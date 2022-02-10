import { Heading3, Heading5 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import React from "react";

const YourOrder = () => {
    return (
        <div className="mb-10">
            <Heading3 className="mb-4">SU PEDIDO</Heading3>
            <table className="w-full">
                <thead>
                    <tr>
                        <th className="py-4 text-left">
                            <Heading5>Productos</Heading5>
                        </th>
                        <th className="py-4 text-left">
                            <Heading5>Subtotal</Heading5>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[1, 2, 3].map((item,key) => (
                        <tr key={key} className="border-b border-gray-200">
                            <td className="py-4 font-text">
                                Vainilla x <span className="font-bold">3</span>
                            </td>
                            <td className="py-4 font-text">
                                {formatCurrency(1.6)}
                            </td>
                        </tr>
                    ))}
                    <tr className="border-b border-gray-200">
                        <td className="py-4 ">
                            <Heading5>Subtotal</Heading5>
                        </td>
                        <td className="py-4 font-text">
                            {formatCurrency(1.6)}
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                        <td className="py-4 ">
                            <Heading5>Total</Heading5>
                        </td>
                        <td className="py-4 font-text font-bold">
                            {formatCurrency(1.6)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default YourOrder;
