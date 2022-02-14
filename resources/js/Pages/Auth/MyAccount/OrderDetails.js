import { Heading6 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import TableProductList from "@/Pages/Checkout/TableProductList";
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
                <TableProductList
                    products={order.products}
                    subTotal={order.sub_total}
                    discount={order.discount}
                    total={order.total}
                />
            </div>
        </Layout>
    );
};

export default orderDetails;
