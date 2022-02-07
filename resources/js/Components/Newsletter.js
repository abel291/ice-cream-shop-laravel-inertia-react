import React from "react";
import ApplicationLogo from "./ApplicationLogo";
import Input from "./Input";

const Newsletter = () => {
    return (
        <div className="  bg-orange-50 ">
            <div className="py-section mx-auto flex max-w-6xl justify-center px-10 md:px-0">
                <div className="w-full space-y-8 md:w-2/3 lg:w-1/3  ">
                    <ApplicationLogo className="mx-auto h-20 w-20 " />
                    <p className="text-center font-text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Voluptas omnis nostrum eligendi labore ab unde.
                        Voluptas earum omnis
                    </p>
                    <div className="flex">
                        <div className="flex-grow">
                            <Input placeholder="Ingrese su Email*" />
                        </div>
                        <button className="btn btn-md ml-1">Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
