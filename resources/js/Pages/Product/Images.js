import React from "react";

const Images = ({ images }) => {
    return (
        <div className="flex items-stretch gap-x-4 ">
            <div className="w-1/5">
                <div className="space-y-4">
                    {images.slice(1).map((image, key) => (
                        <div key={key}>
                            <img
                                src={"/img/product/img-" + image + ".jpg"}
                                alt="product"
                                className="w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-4/5  bg-orange-50 flex items-center">
                <img
                    src={"/img/product/img-3.jpg"}
                    alt="product"
                    className=" max-w-full max-h-full "
                />
            </div>
        </div>
    );
};

export default Images;
