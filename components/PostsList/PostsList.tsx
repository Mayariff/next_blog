"use client";
import Link from "next/link";
import { postType, usePosts } from "@/store";
import { shallow } from "zustand/shallow";
import React, { useEffect } from "react";


const PostsList = () => {
  const [posts, isLoading, getAllPosts] = usePosts(state => [
    state.posts,
    state.isLoading,
    state.getAllPosts] as [postType[], boolean, () => Promise<void>], shallow);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {isLoading ?
        <div>Loading...</div> :
        <ul>
          {posts.map(p => <li key={p.id}>
              <Link href={`/blog/${p.id}`}>
                {p.title}
              </Link>
            </li>
          )}
        </ul>}</>
  );
};

export default PostsList;