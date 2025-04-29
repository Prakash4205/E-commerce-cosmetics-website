import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthContext";

function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/assets/image.png" alt="Crystal Logo" className="logo-img" />
        CRYSTAL
      </div>

      <ul className="nav-links">
        <li><Link to="/">Shop</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <div className="auth-links">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="logout">Logout</button>
        ) : (
          <>
            <Link to="/login" className="login">Login</Link> | 
            <Link to="/signup" className="signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
