import Button from "@/Components/Button";
import { Heading1 } from "@/Components/Elements";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";

const ErrorPage = ({ status }) => {
    console.log(status);
    const title = {
        503: "503: Service Unavailable",
        500: "500: Server Error",
        404: "404: PÁGINA NO ENCONTRADA",
        403: "403: Forbidden",
    }[status];

    const description = {
        503: "Lo sentimos, estamos haciendo un poco de mantenimiento. Por favor, revise luego.",
        500: "Vaya, algo salió mal en nuestros servidores.",
        404: "La página que buscas no existe. Es posible que se haya movido o eliminado por completo. Intente buscar en otra página o regrese a la página de inicio del sitio web para encontrar lo que está buscando.",
        403: "Lo sentimos, tiene prohibido acceder a esta página.",
    }[status];

    return (
        <AppLayout title="Pagina no encontrada">
            <div className="py-section container ">
                <div className="flex flex-col gap-20 lg:flex-row">
                    <div className="w-full lg:w-1/2">
                        <p className=" mb-1 font-script text-4xl text-gray-400">
                            Error de pagina
                        </p>
                        <h1 className="title mb-7 text-5xl lg:text-6xl">
                            {title}
                        </h1>
                        <div className="mb-10 font-text">{description}</div>
                        <Link className="btn btn-md" href={route("home")}>
                            Volver al Incio
                        </Link>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <img
                            src="/img/error/img-error.jpg"
                            className="max-h-[500px]"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ErrorPage;
