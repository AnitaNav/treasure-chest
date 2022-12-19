import { useState } from 'react';
import './NewPostPage.css';


export default function PostsPage({ handleNewPost }) {
    const [newPostFormData, setNewPostFormData] = useState({title:'',text: '', image:''});

    // function handleSubmit(evt) {
    //     evt.preventDefault();
    //     handleNewPost(newPostFormData);
    //     setNewPostFormData({
    //       text: ""
    //     })
    //   }
      function handleChange(evt) {
        const newPost = {...newPostFormData,[evt.target.name]: evt.target.value}
        setNewPostFormData(newPost);
      }

    return (
      <>
        <h1>Ⓒⓞⓜⓜⓔⓝⓣⓢ</h1>
        <form onSubmit={evt => handleNewPost(evt,newPostFormData)}>
          <input onChange={handleChange}  name="title" value={newPostFormData.title} id="" cols="30" rows="10"></input>
          <input onChange={handleChange}  name="image" value={newPostFormData.image} id="" cols="30" rows="10"></input>
          <textarea onChange={handleChange}  name="text" value={newPostFormData.text} id="" cols="30" rows="10"></textarea>
          <button className="button">Submit</button>
        </form>
      </>
    );
  }