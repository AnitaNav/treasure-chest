import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';


export default function PostCard({ post, handleDeletePost, handleUpdatePost, setPosts }) {
    const [editable, setEditable] = useState(false);
    const [updatedText, setUpdatedText] = useState(post);
    const comp = <textarea onChange={handleEditPost} name="text" value={updatedText.text} id="" cols="5" rows="5">{post.text}</textarea>;

    function handleEditPost(evt) {
        // evt.preventDefault();
        const editPost = {...updatedText,[evt.target.name]: evt.target.value}
        setUpdatedText(editPost);   
    }

     function handleUpdate(evt) {
        evt.preventDefault();
        handleUpdatePost(updatedText, post._id);
    }

    return (
        <>
            <>
                {!editable ?
                    (<><div>{post.text}</div>
                    </>) : (comp)}</>
            <>
                <button onClick={(evt) => {
                    setEditable(false);
                    handleUpdate (evt);
                }}>Submit</button>
                <button onClick={(evt) => {
                    setEditable(true);
                }}>Update</button>
                <button onClick={() => handleDeletePost(post._id)}>Delete</button>
            </>
        </>
    );

}

