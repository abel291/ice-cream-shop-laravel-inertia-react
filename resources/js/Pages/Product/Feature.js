import React from "react";
import { BodyText, Heading1, Heading5 } from "@/Components/Elements";
import { formatCurrency } from "@/Helpers/helpers";
import { StarIcon } from "@heroicons/react/solid";
import SelectQuantity from "./SelectQuantity";
import Button from "@/Components/Button";
const Feature = () => {
    return (
        <div>
            <Heading1 className="mb-4">CHOCO GLAZE</Heading1>
            <Heading5 className="mb-3">{formatCurrency(1.67)}</Heading5>
            <div className="mb-5 flex gap-x-2">
                {[1, 2, 3, 4, 5].map((item, key) => (
                    <StarIcon key={key} className="h-5 w-5 text-gray-800" />
                ))}
            </div>
            <BodyText className="mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </BodyText>
            <div className="flex flex-col items-center gap-4 md:flex-row">
                <SelectQuantity quantity={1} stock={10} />
                <Button className="btn btn-md">Agregar al Carrito</Button>
            </div>
        </div>
    );
};

export default Feature;
