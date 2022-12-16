import { useState } from 'react';
import './CommentsPage.css';


export default function CommentsPage({ handleNewComment }) {
    const [formData, setFormData] = useState({text: ''});

    function handleSubmit(evt) {
        evt.preventDefault();
        handleNewComment(formData);
        setFormData({
          text: ""
        })
      }
      function handleChange(evt) {
        const newNote = {...formData,[evt.target.name]: evt.target.value}
        setFormData(newNote);
      }

    return (
      <>
        <h1>Comments</h1>
        <form onSubmit={handleSubmit}>
          <textarea onChange={handleChange}  name="text" value={formData.text} id="" cols="30" rows="10"></textarea>
          <button className="button">Submit</button>
        </form>
      </>
    );
  }