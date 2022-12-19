// import NewPostPage from '../../components/NewPostForm/NewPostPage';
import PostCard from '../../components/PostCard/PostCard';

export default function PostPage({ posts, handleNewPost }) {
    
    const postList = posts && posts.map((p, idx) => <PostCard post={p}/> ) 
    

    return (
        <>
            <ul>
             {postList}
            </ul>

        </>
    )
}