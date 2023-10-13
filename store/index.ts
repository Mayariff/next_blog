import { create } from "zustand";
import { getAllPosts, getPostBySearch } from "@/services/getPosts";

export  type postType = {
  userId: number
  id: number
  title: string
  body: string
}
type usePostsType ={
  posts:postType[]
  isLoading: boolean
  getAllPosts: ()=>Promise<void>
  getPostBySearch: (value: string)=>Promise<void>
}
export const usePosts = create<usePostsType>()((set)=>({
  posts:[] as postType[],
  isLoading: false,
  getAllPosts: async ()=>{
    set({isLoading:true})
    const posts = await getAllPosts()
    set({posts, isLoading: false})
  },
  getPostBySearch: async ( value: string)=>{
    set({isLoading:true})
    const posts = await getPostBySearch(value)
    set({posts, isLoading: false})
  }

}))