import { useState } from 'react';

export default function DonatePage({ addDonation }) {
  const [donate, setDonate] = useState([{}]);

  function handleChange(evt) {
    setDonate({...donate,[evt.traget.name]: evt.target.value});
  }

  function submitDonation(evt) {
    evt.preventDefault();
    addDonation(donate);
    setDonate([]);
  }


  return (
    <>
      <h1>ⒹⓄⓃⒶⓉⒺ🧸</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" value={donate.name} onChange={handleChange}/>
          Image:
          <input type="file" />
        </label>
        <button type="submit" onSubmit={submitDonation}>Donate</button>
      </form>
    </>
  );
}