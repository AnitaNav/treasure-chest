import NewPostPage from '../../components/NewPostForm/NewPostPage';
import { useEffect } from 'react';
import PostCard from '../../components/PostCard/PostCard';
import * as postsAPI from '../../utilities/posts-api';

export default function PostPage({ posts, handleNewPost, setPosts, handleDeletePost, handleUpdatePost }) {
    useEffect(function () {
        async function getPosts() {
          console.log('getallposts')
          let allPosts = await postsAPI.getAllPosts();
          console.log(allPosts,'test')
          setPosts(allPosts)
        }
        getPosts();
      }, []);
    
    const postList = posts && posts.map((p, idx) => <PostCard post={p} handleDeletePost={handleDeletePost} handleUpdatePost={handleUpdatePost}/> ) 
    

    return (
        <>
            <NewPostPage handleNewPost={handleNewPost} />
            <ul>
             {postList}
            </ul>

        </>
    )
}