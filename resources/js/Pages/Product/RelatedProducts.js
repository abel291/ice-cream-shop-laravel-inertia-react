import { Heading3 } from "@/Components/Elements";
import ProductCard from "@/Components/ProductCard";
import React from "react";

const RelatedProducts = ({ products = [] }) => {
    return (
        <div>
            <Heading3 className="mb-10">PRODUCTOS RELACIONADOS</Heading3>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product, key) => (
                    <ProductCard key={key} product={product} />
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
