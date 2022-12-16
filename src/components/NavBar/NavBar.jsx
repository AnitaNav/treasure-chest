import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className = "container">
    <nav>
      <Link to="/">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/donates">Donate</Link>
      &nbsp; | &nbsp;
      <Link to="/comments">Comments</Link>
      &nbsp; | &nbsp;
      <Link to="/cart">Pick Up</Link>
      &nbsp;&nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </div>
  );
}