import { Heading3, Heading5 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import TableProductList from "./TableProductList";

const YourOrder = () => {
    const props = usePage().props;
    console.log(props)
    return (
        <div className="mb-10">
            <Heading3 className="mb-4">SU PEDIDO</Heading3>
            <TableProductList
                products={props.products}
                subTotal={props.meta.sub_total}
                discount={props.meta.discount}
                total={props.meta.total}
            />
            
        </div>
    );
};

export default YourOrder;
