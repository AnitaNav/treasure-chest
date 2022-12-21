import { useState } from 'react';
import * as postsAPI from '../../utilities/posts-api';
import './PostCard.css';


export default function PostCard({ post, handleDeletePost, handleUpdatePost, setPosts }) {
    const [editable, setEditable] = useState(false);
    const [updatedText, setUpdatedText] = useState(post);
    const comp = <textarea onChange={handleEditPost} name="text" value={updatedText.text} id="" cols="15" rows="5">{post.text}</textarea>;

    function handleEditPost(evt) {
        // evt.preventDefault();
        const editPost = { ...updatedText, [evt.target.name]: evt.target.value }
        setUpdatedText(editPost);
    }

    function handleUpdate(evt) {
        evt.preventDefault();
        handleUpdatePost(updatedText, post._id);
    }

    return (
        <div className="Comments">
            <>
                {!editable ?
                    (<><div className="Post-form">{post.text}</div>
                    </>) : (comp)}</>
            <>
                <button className="button" onClick={(evt) => {
                    setEditable(false);
                    handleUpdate(evt);
                }}>Submit</button>
                <button className="button" onClick={(evt) => {
                    setEditable(true);
                }}>Update</button>
                <button className="button" onClick={() => handleDeletePost(post._id)}>Delete</button>
            </>
        </div>
    );

}

