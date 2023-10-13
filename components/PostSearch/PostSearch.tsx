"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { usePosts } from "@/store";


const PostSearch = () => {
  const getPostBySearch = usePosts((state) => state.getPostBySearch);
  const [search, setSearch] = useState<string>("");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setSearch(e.target.value);
  const handelSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await getPostBySearch(search);
  };
  return (
    <form onSubmit={handelSubmit}>
      <input type={"text"} placeholder={"search post"} onChange={handleChange} value={search} />
      <button>search</button>
    </form>
  );
};

export default PostSearch;