import { Heading6 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import Layout from "./Layout";

const orderDetails = ({ order }) => {
    return (
        <Layout title={"Orden: #" + order.order}>
            <div className="space-y-2 font-text">
                <div className="flex items-center">
                    <span className="mr-2 font-semibold">Telefono:</span>
                    {order.phone}
                </div>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold">Direccion:</span>
                    {order.address}
                </div>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold">Nota:</span>
                    {order.note ? order.note : "sin Nota"}
                </div>
                <div className="flex items-center">
                    <span className="mr-2 font-semibold">
                        Fecha de creacion:
                    </span>
                    {order.created_at}
                </div>
            </div>
            <div>
                <table className="w-full table-fixed">
                    <thead>
                        <tr>
                            <th className="py-4 px-2 text-left">
                                <Heading6>Pedido</Heading6>
                            </th>
                            <th className="py-4 px-2 text-left">
                                <Heading6>Monto</Heading6>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200  font-text">
                        {order.products.map((product, index) => (
                            <tr key={index}>
                                <td className=" p-4 text-left">
                                    {product.quantity} x {product.name}
                                </td>
                                <td className=" p-4 text-left">
                                    {formatCurrency(
                                        product.total_price_quantity
                                    )}
                                </td>
                            </tr>
                        ))}
                        <tr className=" bg-gray-100">
                            <td className="p-4 text-left">Subtotal</td>
                            <td className="p-4 text-left">
                                {formatCurrency(order.sub_total)}
                            </td>
                        </tr>

                        {order.discount && (
                            <tr className="font-semibold  italic">
                                <td className="p-4 text-left ">Descuento</td>
                                <td className="p-4 text-left">
                                    -{formatCurrency(order.discount.applied)}
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
                        <tr className="text-xl font-bold">
                            <td className="p-4 text-left ">Total</td>
                            <td className="p-4 text-left">
                                {formatCurrency(order.total)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout>
    );
};

export default orderDetails;
