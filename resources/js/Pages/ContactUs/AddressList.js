import React from "react";

const AddressList = () => {
    return (
        <div className="bg-orange-50">
            <div className="py-section container">
                <div className="grid gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:gap-x-4">
                    {[1, 2, 3, 4].map((item, key) => (
                        <div key={key} className="text-center">
                            <h4 className="title mb-4 text-2xl">
                                RUE DES MARTYRS
                            </h4>
                            <p className="font-text leading-7">
                                Cl. 13 #esquina, Paris, France <br />
                                heladeria@heladeria.com <br />+ 123 456 7890
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddressList;
