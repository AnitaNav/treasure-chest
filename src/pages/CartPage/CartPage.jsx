import ToyList from "../../components/ToyList/ToyList";

export default function CartPage({cart, setCart, removeItemtoCart}) {
console.log(cart, "cart page")
  const displayToys = cart.map((t, idx) => (
    <ToyList toy={t} key={idx} ItemtoCart={removeItemtoCart} add={false} remove={true}/>
  ));
  return (
    <main>
      <h1>Cart Page</h1>
      <div>{displayToys}</div>
    </main>
  );
}