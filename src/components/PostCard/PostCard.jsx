
export default function postCard({post, handleDeletePost, handleUpdatePost }) {
    return (
        <>
            <div>{post.title}</div>
            <p>{post.text}</p>
            <button onClick={() => handleUpdatePost(post._id)}>Update</button> 
            <button onClick={() => handleDeletePost(post._id)}>Delete</button> 
        </>
    );

}