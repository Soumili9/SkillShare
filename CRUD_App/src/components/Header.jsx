import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { isUserLogin } = useContext(AuthContext);

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <Link to="/" className="navbar-brand text-dark">SkillShare</Link>
        <nav>
          <ul className="nav">
            <li className="nav-item"><Link to="/" className="nav-link px-2">Home</Link></li>
            <li className="nav-item"><Link to="/cart" className="nav-link px-2">Cart</Link></li>
            {isUserLogin ? (
              <li className="nav-item"><Link to="/logout" className="nav-link px-2">Logout</Link></li>
            ) : (
              <>
                <li className="nav-item"><Link to="/login" className="nav-link px-2">Login</Link></li>
                <li className="nav-item"><Link to="/admin" className="nav-link px-2">Admin Login</Link></li>
                <li className="nav-item"><Link to="/signup" className="nav-link px-2">Sign-up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
