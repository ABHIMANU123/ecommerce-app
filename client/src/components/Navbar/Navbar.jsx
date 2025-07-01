import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
<<<<<<< HEAD
import MenuIcon from '@mui/icons-material/Menu';
=======
import menuIcon from '../../assets/burger-menu.png';
>>>>>>> 9a1669599858e57b3f605c5975ceaef872126e2d

export function Navbar() {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">C2C Market</Link>

<<<<<<< HEAD
      <div className="mobile-menu"><MenuIcon/></div>
=======
      <div className="mobile-menu">
        <img src={menuIcon} className="menu-icon" alt="" />
      </div>
>>>>>>> 9a1669599858e57b3f605c5975ceaef872126e2d

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        {!user ? (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        ) : (
          <>
            <span className="username">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
