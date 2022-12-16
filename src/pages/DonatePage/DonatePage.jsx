
export default function DonatePage() {


  return (
    <>
      <h1>Donate Page</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
          Image:
          <input type="file" />
        </label>
        <button>Donate</button>
      </form>
    </>
  );
}