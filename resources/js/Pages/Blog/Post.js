import Breadcrumbs from "@/Components/Breadcrumbs";
import { Heading1 } from "@/Components/Elements";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";
import React from "react";
import { TagList } from "../Products/Tags";
import Author from "./Author";
import Image from "./Image";

const Post = (props) => {
    return (
        <AppLayout title={props.post.title}>
            <Breadcrumbs
                data={[
                    { path: route("blog"), name: "Blog" },
                    { name: props.post.title },
                ]}
            />
            <div className="py-section container">
                <Image
                    img={props.post.img}
                    month={props.post.date[0]}
                    day={props.post.date[1]}
                />
                <Author tags={props.post.tags} />
                <Heading1 className="mb-4">{props.post.title}</Heading1>
                <div
                    dangerouslySetInnerHTML={{
                        __html: props.post.description_max,
                    }}
                    className="mb-14 font-text"
                ></div>
                <div>
                    <TagList tags={props.post.tags} routePath="blog" />
                </div>
            </div>
        </AppLayout>
    );
};

export default Post;
