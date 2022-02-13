import React from "react";

const Images = ({ product }) => {
    return (
        <div className="flex items-stretch gap-x-4 ">
            <div className="w-1/5">
                <div className="space-y-4">
                    {product.images.map((item, key) => (
                        <div key={key}>
                            <img
                                src={item.img}
                                alt={item.alt}
                                alt={item.title}
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex  w-4/5 items-center bg-orange-50">
                <img
                    src={product.img}
                    alt={product.name}
                    alt={product.name}
                    className=" max-h-full max-w-full "
                />
            </div>
        </div>
    );
};

export default Images;
