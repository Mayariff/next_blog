import React from "react";
import { Metadata } from "next";

type postType={
  params: {id:string}
}

export async function generateMetadata({params:{id}}:postType):Promise<Metadata>{
  const post =  await getData(id)
  return ( {title: `${post.title} | Next App`,
           description: "full version of the post"})
}

async function getData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 30 } ,
    }as RequestInit|undefined
  );
  return res.json();
}

const Post = async ({params}:postType) => {
  const {id} = params
  const post =  await getData(id)
  return (
    <article>
    <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;