import { Heading6 } from "@/Components/Elements";
import ValidationErrors from "@/Components/ValidationErrors";
import { formatCurrency } from "@/Helpers/helpers";
import { XIcon } from "@heroicons/react/solid";
import { useForm } from "@inertiajs/inertia-react";
import React, { useEffect, useRef } from "react";
import SelectQuantity from "../Product/SelectQuantity";

const CartProduct = ({ product }) => {
    const removeProductToCart = useForm();
    const addProductToCart = useForm({
        id: product.id,
        quantity: product.quantity,
    });

    const handleChangeQuantity = (newQuantity) => {
        addProductToCart.setData("quantity", newQuantity);
    };
    const handleClickRemoveItem = () => {
        removeProductToCart.delete(
            route("shopping-cart.destroy", { id: product.id }),
            { preserveScroll: true }
        );
    };

    const init = useRef(false);
    useEffect(() => {
        if (init.current === true) {
            addProductToCart.post(route("shopping-cart.store"), {
                preserveScroll: true,
            });
        }
        init.current = true;
    }, [addProductToCart.data.quantity]);
    return (
        <tr
            className={
                "border-b border-gray-300 " +
                (removeProductToCart.processing || addProductToCart.processing
                    ? "opacity-25"
                    : "")
            }
        >
            <td className="items-center py-4 px-2">
                <div
                    onClick={handleClickRemoveItem}
                    className="inline-block cursor-pointer"
                >
                    <XIcon className="h-5 w-5" />
                </div>
            </td>
            <td className="hidden py-4 md:table-cell">
                <img src={product.img} className="h-16 w-16" alt="" />
            </td>
            <td className="py-4 px-2">
                <Heading6>{product.name}</Heading6>
                <div className="text-red mt-2 text-sm">
                    {removeProductToCart.errors &&
                        removeProductToCart.errors.message}
                </div>
            </td>
            <td className="py-4 px-2 font-text">
                {formatCurrency(product.price)}
            </td>
            <td className=" py-4 px-2 text-center font-text lg:text-left">
                <div className="mb-3">
                    <SelectQuantity
                        onChange={handleChangeQuantity}
                        quantity={product.quantity}
                    />
                </div>

                {addProductToCart.errors && (
                    <div className="mb-3 ">
                        <ValidationErrors errors={addProductToCart.errors} />
                    </div>
                )}

                {product.quantity > 1 && (
                    <div className="ml-3 text-sm text-gray-500 ">
                        1 x {formatCurrency(product.price)}
                    </div>
                )}
            </td>
            <td className="hidden py-4 px-2 font-text md:table-cell">
                {formatCurrency(product.total_price_quantity)}
            </td>
        </tr>
    );
};

export default CartProduct;
