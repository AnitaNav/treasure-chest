import './HomePage.css';
import ToyList from '../../components/ToyList/ToyList';


export default function HomePage({ toys, addItemtoCart }) {


    const displayToys = toys.map((t, idx) => (
        <ToyList toy={t} key={idx} ItemtoCart={addItemtoCart} add={true} remove={false}/>
      ));

        return (
                <ul>
                {displayToys}
                </ul>
        );
    }