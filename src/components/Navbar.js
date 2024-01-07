import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex items-center justify-center">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/publish">Publish</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
