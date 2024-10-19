import { useContext } from "react";
import Cards from "./Cards"
import { PostList as PostListData } from "../store/post-list-store";
const PostList=()=>{
 const {postList}= useContext(PostListData);
  return(
  <>
  {postList.map((post)=>(
    <Cards key={post.id} post={post}/>
  ))}
  
  </>
  );
}
export default PostList;