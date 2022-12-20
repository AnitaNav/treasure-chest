import { useState } from 'react';


export default function PostCard({ post, handleDeletePost, handleUpdatePost }) {
    const [editable, setEditable] = useState(false);
    const [updatedText, setUpdatedText] = useState(post.text);
    const comp = <textarea name="text" value={updatedText} id="" cols="5" rows="5"></textarea>;

    function handleEditPost(evt) {
        const editPost = {...editable,[evt.target.name]: evt.target.value}
        setEditable(editPost);   
    }

    return (
        <>
            <>
                {(!editable) ?
                    (<><div>{post.text}</div>
                    </>) : (comp)}</>
            <>
                <button onClick={() => {
                    setEditable(true);
                    handleUpdatePost(post, post._id);
                }}>Update</button>
                <button onSubmit={() => {
                    setEditable(false);
                    handleEditPost (post._id);
                }}>Edit</button>
                <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            </>
        </>
    );

}

