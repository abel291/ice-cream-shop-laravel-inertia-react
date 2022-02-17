import { Heading2, Heading3 } from "@/Components/Elements";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import Author from "./Author";
import Image from "./Image";

const PostListItem = ({ post }) => {
    return (
        <article className="mb-16">
            <Image img={post.img} month={post.date[0]} day={post.date[1]} />
            <Author tags={post.tags} />
            <Link href={route("post", { slug: post.slug })}>
                <Heading2 className="mb-1">{post.title}</Heading2>
            </Link>
            <p className="font-text text-gray-500">{post.description_min}</p>
        </article>
    );
};

export default PostListItem;
