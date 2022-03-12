import { Link } from "react-router-dom";
import styles from "./Navbar.css";

const Navbar = () => {
  return(
    <div className="spaceN">
      <div>
        <Link to="/users">Users</Link>
      </div>
      <div>
        <Link to="/books">Books</Link>
      </div>
    </div>
  );
};

export default Navbar;