import React from "react";

// export const TitleH2 = ({ children }) => {
//     return <h2 className="title mb-5 text-4xl lg:text-5xl">{children}</h2>;
// };

// export const SubtTile = ({ children }) => {
//     return (
//         <p className="mb-1 font-script text-4xl text-gray-400 lg:text-5xl">
//             {children}
//         </p>
//     );
// };
// export const Text = ({ children }) => {
//     return <p className="font-text">{children}</p>;
// };
export const Heading1 = ({ className = "", children }) => {
    return (
        <h1
            title={children}
            className={"title text-5xl leading-normal" + " " + className}
        >
            {children}
        </h1>
    );
};
export const Heading2 = ({ className = "", children }) => {
    return (
        <h2
            title={children}
            className={"title text-4xl leading-normal" + " " + className}
        >
            {children}
        </h2>
    );
};
export const Heading3 = ({ className = "", children }) => {
    return (
        <h3
            title={children}
            className={"title text-3xl leading-normal" + " " + className}
        >
            {children}
        </h3>
    );
};
export const Heading4 = ({ className = "", children }) => {
    return (
        <h4
            title={children}
            className={
                "title inline-block text-xl leading-normal md:text-2xl" +
                " " +
                className
            }
        >
            {children}
        </h4>
    );
};

export const Heading5 = ({ className = "", children }) => {
    return (
        <h5
            title={children}
            className={
                "title inline-block leading-normal md:text-xl" + " " + className
            }
        >
            {children}
        </h5>
    );
};

export const Heading6 = ({ className = "", children }) => {
    return (
        <span
            title={children}
            className={"title inline-block leading-normal" + " " + className}
        >
            {children}
        </span>
    );
};
export const BodyText = ({ className = "", children }) => {
    return (
        <p title={children} className={"font-text" + " " + className}>
            {children}
        </p>
    );
};
