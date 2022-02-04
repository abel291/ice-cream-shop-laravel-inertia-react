import React from "react";
import Authenticated from "@/Layouts/Authenticated";
import { Head } from "@inertiajs/inertia-react";

function Home(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            
        >
            <Head title="Home" />

            <div className="py-12">
                <div className="container mx-auto">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="border-b border-gray-200 bg-white p-6">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Home;
