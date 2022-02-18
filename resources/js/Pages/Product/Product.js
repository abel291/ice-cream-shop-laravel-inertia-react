import Breadcrumbs from "@/Components/Breadcrumbs";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import Description from "./Description";
import Feature from "./Feature";
import Images from "./Images";
import RelatedProducts from "./RelatedProducts";
const Product = (props) => {
    return (
        <AppLayout title={props.product.name}>
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    {
                        path: route("products"),
                        name: props.product.category.name,
                    },
                    { name: props.product.name },
                ]}
            />
            <div className="py-section container space-y-28">
                <div className="flex flex-col gap-y-14 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <div className="w-full lg:w-1/2">
                        <Images product={props.product} />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Feature product={props.product} />
                    </div>
                </div>

                <Description
                    description={props.product.description_max}
                    weight={props.product.weight}
                    dimensions={props.product.dimensions}
                />

                <RelatedProducts products={props.relatedProducts} />
            </div>
        </AppLayout>
    );
};

export default Product;
