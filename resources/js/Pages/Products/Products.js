import Breadcrumbs from "@/Components/Breadcrumbs";
import AppLayout from "@/Layouts/AppLayout";

import React from "react";
import ProductsList from "./ProductsList";
import Sidebar from "./Sidebar";
const categories = [
    "Creamy",
    "Cup",
    "Greek",
    "Italian",
    "Scoop",
    "Treats",
    "Variety",
];
const tags = ["Chip", "Cold", "Light", "Single", "Store", "Sweet", "Takeaway"];
const Products = () => {
    return (
        <AppLayout title="Helados">
            <Breadcrumbs
                data={[
                    { path: route("products"), name: "Helados" },
                    { name: "Lista de helados" },
                ]}
            />
            <div className="py-section container">
                <div className="flex flex-col-reverse gap-y-10 lg:flex-row lg:gap-x-10 lg:gap-y-0">
                    <div className="w-full lg:w-3/12">
                        <Sidebar
                            categories={categories}
                            tags={tags}
                            flavors={[1, 2, 3]}
                        />
                    </div>
                    <div className="w-full lg:w-9/12 ">
                        <ProductsList data={[1, 2, 3, 4, 5, 6, 1, 2, 3]} />
                        
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Products;
