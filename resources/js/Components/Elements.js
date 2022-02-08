import React from "react";

export const TitleH2 = ({ children }) => {
    return <h2 className="title mb-5 text-4xl lg:text-5xl">{children}</h2>;
};

export const SubtTile = ({ children }) => {
    return (
        <p className="mb-1 font-script text-4xl text-gray-400 lg:text-5xl">
            {children}
        </p>
    );
};
export const Text = ({ children }) => {
    return <p className="font-text">{children}</p>;
};

  
