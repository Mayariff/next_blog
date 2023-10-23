import { Metadata } from "next";
import { getAllPosts, getPost } from "@/services/getPosts";

type propsType = {
  params: { id: string }
}


export async function  generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map(p => ({
    slag: p.id.toString()
  }));
}


export  async function generateMetadata(props: propsType): Promise<Metadata> {
  const { params: { id } } = props;
  const post = await getPost(id);
  return ({
    title: `${post.title} | Next App`,
    description: "full version of the post"
  });
}


const Post = async (props: propsType) => {
  const { params: { id } } = props;
  const post = await getPost(id);
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;