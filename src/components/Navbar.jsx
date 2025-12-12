import "../App.css";

export default function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-left">
        <img src="/placeholder-logo.png" className="nav-logo" />
        <h2 className="nav-brand">StayScape</h2>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Hotels</li>
        <li>Experience</li>
        <li>About</li>
      </ul>

      <div className="nav-right">
        <i className="ri-search-line nav-search-icon"></i>
        <button className="nav-login-btn">Login</button>
      </div>
    </nav>
  );
}
