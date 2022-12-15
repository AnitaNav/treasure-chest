
export default function ToyList({ toy, ItemtoCart, add, remove }) {

  return (
    <>
      <h3>name: {toy.name} </h3>
      <img src={toy.image} alt={toy.name} />
      {add && <button onClick={() => ItemtoCart(toy._id) }>Add to Cart</button>}
      {remove && <button onClick={() => ItemtoCart(toy._id) }>Remove to Cart</button>}
    </>
  );
}