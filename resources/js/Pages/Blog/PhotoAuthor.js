import { Heading5 } from "@/Components/Elements";
import React from "react";

const PhotoAuthor = () => {
    return (
        <div>
            <img
                src="/img/blog/author-blog.jpg"
                alt=""
                className="mb-5 w-full"
            />
            <Heading5>Hanna Brown</Heading5>
            <p className="font-text text-gray-600">Authora</p>
        </div>
    );
};

export default PhotoAuthor;
