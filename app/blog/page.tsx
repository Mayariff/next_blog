import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
  description: "posts from employees and customer reviews"
};
type postType = {
  userId: number
  id: number
  title: string
  body: string
}

async function getData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`,
    { next: { revalidate: 30 } ,
    }as RequestInit|undefined
  );
  if(!res.ok) throw Error('Failed request to server')
  return res.json();
}

const Blog = async () => {
  const posts: postType[] = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      {posts.map(p => <li key={p.id}>
        <Link href={`/blog/${p.id}`}>
          {p.title}
        </Link>
      </li>)}
    </>
  );
};

export default Blog;