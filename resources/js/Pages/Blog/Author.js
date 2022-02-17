import React from "react";

const Author = ({tags}) => {
    return (
        <p className="mb-1 font-text text-gray-500">
            By Hanna Brown - {tags.map((tag) => tag.name).join(", ")}
        </p>
    );
};

export default Author;
