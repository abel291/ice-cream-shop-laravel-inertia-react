import Breadcrumbs from "@/Components/Breadcrumbs";
import Pagination from "@/Components/Pagination";
import AppLayout from "@/Layouts/AppLayout";

import React, { Fragment } from "react";
import Layout, { Sidebar } from "./Layout";
import Categories from "./Categories";
import FollowUs from "./FollowUs";
import NewProducts from "./NewProducts";
import ProductsList from "./ProductsList";
import Tags from "./Tags";

const Products = (props) => {
    return (
        <AppLayout title="Helados">
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    { name: "Lista de helados" },
                ]}
            />
            <div className="py-section container">
                <Layout>
                    <Sidebar>
                        <NewProducts products={props.newProducts} />
                        <Categories categories={props.categories} />
                        <Tags tags={props.tags} />
                        <FollowUs />
                    </Sidebar>

                    <div className="w-full lg:w-9/12 ">
                        <ProductsList products={props.products} />
                        <Pagination data={props.products} />
                    </div>
                </Layout>
            </div>
        </AppLayout>
    );
};

export default Products;
{
    /* <div className="py-section container">
                <div className="flex flex-col-reverse gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <div className="w-full lg:w-3/12">
                        <Sidebar
                            categories={props.categories}
                            tags={props.tags}
                            newProducts={props.newProducts}
                        />
                    </div>
                    <div className="w-full lg:w-9/12 ">
                        <ProductsList products={props.products} />
                        <Pagination data={props.products} />
                    </div>
                </div>
            </div> */
}
