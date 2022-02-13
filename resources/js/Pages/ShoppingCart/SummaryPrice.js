import Button from "@/Components/Button";
import { Heading3, Heading5 } from "@/Components/Elements";
import Input from "@/Components/Input";
import { formatCurrency } from "@/Helpers/helpers";
import { XIcon } from "@heroicons/react/solid";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";

const SummaryPrice = ({ meta }) => {
    const applyDiscount = useForm({ code: "" });
    const removeDiscount = useForm();
    const { errors } = usePage().props;
    const handleSubmitDiscount = (e) => {
        e.preventDefault();
        if (applyDiscount.data.code === "") {
            return;
        }

        applyDiscount.get(route("apply_cupon_discount"), {
            preserveScroll: true,
        });
    };

    const handleClickRemoveDiscount = (/*code*/) => {
        if (applyDiscount.processing) return false;
        applyDiscount.get(route("remove_cupon_discount"), {
            preserveScroll: true,
        });
    };
    return (
        <>
            <div className="mb-20">
                <form onSubmit={handleSubmitDiscount} className="mb-3">
                    <div className="flex gap-x-2">
                        <Input
                        className="placeholder:text-gray-300"
                            required={true}
                            handleChange={(e) =>
                                applyDiscount.setData("code", e.target.value)
                            }
                            placeholder="CUPON"
                            type="text"
                        />
                        <Button
                            processing={applyDiscount.processing}
                            className="btn btn-md"
                        >
                            Aplicar cupon
                        </Button>
                    </div>
                </form>

                {errors.code && (
                    <div className="mb-3 font-text text-sm text-red-500">
                        {errors.code}
                    </div>
                )}

                {meta.discount_availables && (
                    <div className="space-x-3">
                        {meta.discount_availables.map((item) => (
                            <span
                                key={item.code}
                                className="font-text text-sm text-gray-400 "
                            >
                                {item.code} {item.active ? "1" : "0"}
                            </span>
                        ))}
                    </div>
                )}
            </div>
            
            <div className="mb-5">
                <Heading3 className="mb-10">TOTALES DEL CARRITO</Heading3>
                <table className="w-full">
                    <tbody>
                        <tr className="border-b border-gray-200">
                            <td className="py-4 px-2 md:w-1/5">
                                <Heading5> Sub total </Heading5>
                            </td>
                            <td className="py-4 px-2 font-text">
                                {formatCurrency(meta.sub_total)}
                            </td>
                        </tr>
                        {meta.discount && (
                            <tr
                                className={
                                    "border-b border-gray-300  text-green-500" +
                                    (applyDiscount.processing
                                        ? " opacity-25"
                                        : "")
                                }
                            >
                                <td className="py-4 px-2 ">
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() =>
                                                handleClickRemoveDiscount(
                                                    meta.discount.code
                                                )
                                            }
                                        >
                                            <XIcon className="h-5 w-5 text-gray-400" />
                                        </button>
                                        <Heading5> Descuento</Heading5>
                                    </div>
                                </td>
                                <td className="font-text">
                                    -{formatCurrency(meta.discount.applied)}
                                </td>
                            </tr>
                        )}
                        <tr className="border-b border-gray-200">
                            <td className="py-4 px-2 md:w-1/5">
                                <Heading5> Total </Heading5>
                            </td>
                            <td className="py-4 px-2 font-text font-bold">
                                {formatCurrency(meta.total)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SummaryPrice;
