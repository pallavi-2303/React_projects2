import Header from './components2/Header';
import Footer from './components2/Footer';
import './App.css'
import SideBar from './components2/SideBar';
import CreatePost from './components2/CreatePost';
import PostList from './components2/PostList';
import PostListProvider from './store/post-list-store';
import { useState } from 'react';
function App() {
  const [selectedTab,setSelectedTab]=useState("Home");
  return <PostListProvider> <div className="div-container">
  <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
  <div className='content'>
  <Header></Header>
  {selectedTab==='Home' ?
 (<PostList></PostList>) : (
  <CreatePost></CreatePost>)}
  <Footer></Footer>
  </div>
  </div>
  </PostListProvider>
  
  

   }

export default App
