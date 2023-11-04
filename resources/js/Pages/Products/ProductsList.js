import ProductCard from "@/Components/ProductCard";
import { formatCurrency } from "@/Helpers/helpers";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const ProductsList = ({ products }) => {
    return (
        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {products.data.map((item, key) => (
                <ProductCard key={key} product={item} />
            ))}
        </div>
    );
};

export default ProductsList;
