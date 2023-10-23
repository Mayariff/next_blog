import React from "react";
import { Metadata } from "next";
import { PostSearch, PostsList } from "@/components";

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "posts from employees and customer reviews"
};

export const revalidate = 10

const Blog = () => {
  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch />
      <PostsList />
    </>
  );
};

export default Blog;