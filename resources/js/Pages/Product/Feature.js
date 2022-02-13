import React from "react";
import { BodyText, Heading1, Heading5 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import { StarIcon } from "@heroicons/react/solid";
import SelectQuantity from "./SelectQuantity";
import Button from "@/Components/Button";
import { useForm } from "@inertiajs/inertia-react";
import ValidationErrors from "@/Components/ValidationErrors";
const Feature = ({ product }) => {
    const { data, setData, post, processing, errors } = useForm({
        id: product.id,
        quantity: 1,
    });
    function submit(e) {
        e.preventDefault();
        post(route("shopping-cart.store"), { preserveScroll: true });
    }
    const handleChangeQuantity = (newQuantity) => {
        setData("quantity", newQuantity);
    };
    return (
        <div>
            <Heading1 className="mb-4">{product.name}</Heading1>
            <Heading5 className="mb-3">
                {formatCurrency(product.price)}
            </Heading5>
            <div className="mb-5 flex gap-x-2">
                {[...Array(product.stars).keys()].map((key) => (
                    <StarIcon key={key} className="h-5 w-5 text-gray-800" />
                ))}
            </div>
            <p className="mb-10 font-text">{product.description_min}</p>
            <form
                onSubmit={submit}
                className="mb-5 flex flex-col items-center gap-4 md:flex-row"
            >
                <SelectQuantity
                    quantity={data.quantity}
                    onChange={handleChangeQuantity}
                />
                <Button processing={processing} className="btn btn-md">
                    Agregar al Carrito
                </Button>
            </form>
            <ValidationErrors errors={errors} />
        </div>
    );
};

export default Feature;
