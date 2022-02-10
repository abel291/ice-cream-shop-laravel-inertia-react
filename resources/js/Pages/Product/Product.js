import Breadcrumbs from "@/Components/Breadcrumbs";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import Description from "./Description";
import Feature from "./Feature";
import Images from "./Images";
import RelatedProducts from "./RelatedProducts";
const Product = ({ product = {} }) => {
    return (
        <AppLayout title="Helado">
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    { path: route("products"), name: "Chocolate" },
                    { name: "Helado" },
                ]}
            />
            <div className="py-section container space-y-28">
                <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-14 lg:gap-y-0">
                    <div className="w-full lg:w-1/2">
                        <Images images={[1, 2, 3, 4, 5]} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Feature product={product} />
                    </div>
                </div>

                <Description product={product} />

                <RelatedProducts relatedProducts={[1,2,3,4]} />
            </div>
        </AppLayout>
    );
};

export default Product;
