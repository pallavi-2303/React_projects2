import { createContext, useReducer } from "react";

 export const PostList=createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
});

const postListReducer=(currentList,action)=>{
  let newPostList=currentList;
  if(action.type==="DELETE_POST"){
    newPostList=currentList.filter((post)=>post.id!==action.payload.postId);
  }
  else if(action.type==="ADD_POST"){
    newPostList=[action.payload,...currentList]
  }

  return newPostList;
}
const PostListProvider=({children})=>{
const [postList,dispatchPostList]=useReducer(postListReducer,DEFAULT_POST_LIST);
const addPost=(userId,postTitle,body,reactions,tags)=>{
  dispatchPostList({
  type:"ADD_POST"  ,
  payload:{
    id:Date.now(),
 title:postTitle ,
 body:body,
 reactions:reactions,
 user_id:userId,
 tags:tags,
  }
  })
};
const deletePost=(postId)=>{
  dispatchPostList({
    type:"DELETE_POST",
    payload:{
      postId
    },
  });
};
  return <PostList.Provider value={{postList,addPost,deletePost}}>{children}</PostList.Provider>
};
const DEFAULT_POST_LIST=
[{
 id:'1',
 title:'Going to Mumbai' ,
 body:'hii friends,I am going to Mumbai.Hope to Enjoy alot.Peace out',
 reactions:'2',
 user_id:'user9',
 tags:["Enjoying","Mumbai","Going"],
},
{
  id:'2',
 title:'Going to America' ,
 body:'hii friends,I am going to Mumbai.Hope to Enjoy alot.Peace out',
 reactions:'6',
 user_id:'user8',
 tags:["Enjoying","America","Going"],
},
]
export default PostListProvider;