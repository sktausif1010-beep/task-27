import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={logo} alt="Shoe Store Logo"/>
        <h2>Shoe Store</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Categories</li>
        <li>About Us</li>
      </ul>

    </nav>
  );
}

export default Navbar;