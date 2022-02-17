import Breadcrumbs from "@/Components/Breadcrumbs";

import Pagination from "@/Components/Pagination";
import AppLayout from "@/Layouts/AppLayout";
import React from "react";
import Categories from "../Products/Categories";
import FollowUs from "../Products/FollowUs";
import Layout, { Sidebar } from "../Products/Layout";
import Tags from "../Products/Tags";
import PhotoAuthor from "./PhotoAuthor";
import PostListItem from "./PostListItem";

const Posts = (props) => {
    return (
        <AppLayout title="Blog">
            <Breadcrumbs data={[{ path: route("blog"), name: "Blog" }]} />
            <div className="py-section container">
                <Layout>
                    <Sidebar>                       
                        <PhotoAuthor/>
                        <Categories
                            routePath="blog"
                            categories={props.categories}
                        />

                        <Tags tags={props.tags} routePath="blog" />
                        <FollowUs />
                    </Sidebar>

                    <div className="w-full lg:w-9/12 ">
                        <div>
                            {props.posts.data.map((item, key) => (
                                <PostListItem key={key} post={item} />
                            ))}
                        </div>
                        <Pagination data={props.posts} />
                    </div>
                </Layout>
            </div>
        </AppLayout>
    );
};

export default Posts;
