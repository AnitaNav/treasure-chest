import { useState } from 'react';
import './DonatePage.css';

export default function DonatePage({ addDonation }) {
  const [newdonation, setNewDonation] = useState([{name:'',image:''}]);

  function handleChange(evt) {
    console.log('evt',evt);
    setNewDonation({...newdonation,[evt.target.name]: evt.target.value});
    console.log('name',newdonation.name)
  }

  // function submitDonation(evt) {
  //   evt.preventDefault();
  //   addDonation(donate);
  //   setDonate([]);
  // }

// console.log('donate',donate);
  return (
    <>
      <h1>ⒹⓄⓃⒶⓉⒺ🧸</h1>
      <form onSubmit={evt => addDonation(evt, newdonation)}>
        <label>
          Name:
          <input type="text" name="name" value={newdonation.name} onChange={handleChange}/>
          Image:
          <input type="text" name="image" value={newdonation.image} onChange={handleChange}/>
        </label>
        <button className="button" type="submit">Donate</button>
      </form>
    </>
  );
}