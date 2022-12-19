
export default function postCard({post, handleDeletePost }) {
    return (
        <>
            <div>{post.title}</div>
            <p>{post.text}</p>
            <button onClick={() => handleDeletePost(post._id)}>Delete</button> 
        </>
    );

}