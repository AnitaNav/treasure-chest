import './ToyList.css';
export default function ToyList({ toy, ItemtoCart, add, remove }) {

  return (
    <>
      
        <h3>Name: {toy.name} </h3>
        <div className = "Toy-container">
            <img src={toy.image} alt={toy.name} />
          </div>
        {add && <button onClick={() => ItemtoCart(toy._id)}>Add to Cart</button>}
        {remove && <button onClick={() => ItemtoCart(toy._id)}>Remove</button>}
    </>
  );
}