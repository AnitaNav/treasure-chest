import { useState } from 'react';
import './NewPostPage.css';


export default function PostsPage({ handleNewPost }) {
    const [newPostFormData, setNewPostFormData] = useState({title:'',text: ''});

      function handleChange(evt) {
        const newPost = {...newPostFormData,[evt.target.name]: evt.target.value}
        setNewPostFormData(newPost);
      }

    return (
      <>
        <h1>Ⓒⓞⓜⓜⓔⓝⓣⓢ</h1>
        <form onSubmit={evt => handleNewPost(evt,newPostFormData)}>
          <textarea onChange={handleChange}  name="text" value={newPostFormData.text} id="" cols="30" rows="10"></textarea>
          <button className="button">Submit</button>
        </form>
      </>
    );
  }