import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

let CreatePost=()=>{
const {addPost}=  useContext(PostList);
const userIdElement=useRef();
const postTitleElement=useRef();
const bodyElement=useRef();
const reactionsElement=useRef();
const tagsElement=useRef();
const handleOnSubmit=(event)=>{
  event.preventDefault();
  const userId=userIdElement.current.value;
   const postTitle=postTitleElement.current.value;
  const body=bodyElement.current.value;
  const reactions=reactionsElement.current.value;
   const tags=tagsElement.current.value.split("");
   userIdElement.current.value="";
   bodyElement.current.value="";
   postTitleElement.current.value="";
   reactionsElement.current.value="";
   tagsElement.current.value="";
   addPost(userId,postTitle,body,reactions,tags);


}
  return <>
  <form className="create-post" onSubmit={handleOnSubmit}>
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">User Id</label>
    <input type="text" 
    ref={userIdElement}className="form-control" id="userId" 
    
    placeholder="Enter your UserId..."
    />
    </div>
  <div className="mb-3">
    <label htmlFor="postTitle" className="form-label">Post Title</label>
    <input type="text" 
    ref={postTitleElement}className="form-control" id="postTitle" 
    
    placeholder="How areuh feeling today..."
    />
    </div>
    <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea rows="5" type="text" 
     ref={bodyElement}className="form-control" id="body" 
   
    placeholder="Tell ud more about yourself..."
    />
    </div>
    <div className="mb-3">
    <label htmlFor="reactions" className="form-label">reactions</label>
    <input type="text" 
     ref={reactionsElement}className="form-control" id="reactions" 
   
    placeholder="No of people reacted to your post..."
    />
    </div>
    <div className="mb-3">
    <label htmlFor="tags" className="form-label">Hashtags</label>
    <input type="text" 
    ref={tagsElement}
    className="form-control" id="tags" 
    
    placeholder="Please enter your post with space..."
    />
    </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  </>
}
export default CreatePost;