import { useState } from 'react';
import './DonatePage.css';

export default function DonatePage({ addDonation }) {
  const [donate, setDonate] = useState([{name:'',image:null}]);

  function handleChange(evt) {
    console.log('evt',evt);
    setDonate({...donate,[evt.target.name]: evt.target.value});
    console.log('name',donate.name)
  }

  function submitDonation(evt) {
    evt.preventDefault();
    addDonation(donate);
    setDonate([]);
  }

console.log('donate',donate);
  return (
    <>
      <h1>ⒹⓄⓃⒶⓉⒺ🧸</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={donate.name ?? ''} onChange={(evt)=>{handleChange(evt)}}/>
          Image:
          <input type="file" name="image" value={donate.image} onChange={handleChange}/>
        </label>
        <button type="submit" onSubmit={submitDonation}>Donate</button>
      </form>
    </>
  );
}