
import { Heading6 } from "@/Components/Elements";
import Pagination from "@/Components/Pagination";
import { formatCurrency } from "@/Helpers/helpers";

import { Link } from "@inertiajs/inertia-react";

import Layout from "./Layout";

const Orders = (props) => {
    
    return (
        <Layout title="Ordenes">
            <table className="w-full ">
                <thead>
                    <tr>
                        <th className="py-4 px-2 text-left">
                            <Heading6>#Orden</Heading6>
                        </th>

                        <th className="py-4 px-2 text-left">
                            <Heading6>Fecha</Heading6>
                        </th>
                        <th className="py-4 px-2 text-left">
                            <Heading6>Estado</Heading6>
                        </th>
                        <th className="py-4 px-2 text-left">
                            <Heading6>Total</Heading6>
                        </th>
                        {/* <th className="p-4 bg-gray-100 text-heading font-medium text-left">
                            Opciones
                        </th> */}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {props.orders.map((order, index) => (
                        <tr key={index}>
                            <td className="py-4 px-2 font-text underline">
                                <Link
                                    href={route("order-details", [order.order])}
                                >
                                    #{order.order}
                                </Link>
                            </td>

                            <td className="py-4 px-2 font-text ">
                                {order.created_at}
                            </td>

                            <td className="py-4 px-2 font-text text-sm ">
                                {order.state == "successful" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Completado
                                    </span>
                                )}
                                {order.state == "refunded" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Rembolsado
                                    </span>
                                )}
                                {order.state == "CELED" && (
                                    <span className="px-2 py-1 inline-flex leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                                        Rembolsado
                                    </span>
                                )}
                            </td>
                            <td className="py-4 px-2 font-text ">
                                {formatCurrency(order.total)}
                            </td>
                            {/* <td className="px-4 py-5 text-left ">
                                <button>Cancelar pedido</button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="border-t border-gray-200 px-4 py-5 ">
                <Pagination data={props.orders} />
            </div>
        </Layout>
    );
};

export default Orders;
