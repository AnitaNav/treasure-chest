import './ToyList.css';
export default function ToyList({ toy, ItemtoCart, add, remove }) {

  return (
    <>
      
        <div className = "Toy-container">
        <h3 className="Toy-name">Name: {toy.name} </h3>
            <img className="Image" src={toy.image} alt={toy.name} />
          </div>
        {add && <button className="button" onClick={() => ItemtoCart(toy._id)}>Cart 🛒</button>}
        {remove && <button className="button" onClick={() => ItemtoCart(toy._id)}>Remove ❌</button>}
    </>
  );
}