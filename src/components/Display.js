import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

function Sidebar() {
  return (
    <aside>
      <ul>
        <li>
          <Link to="/technology">Technology</Link>
        </li>
        <li>
          <Link to="/sports">Sports</Link>
        </li>
        <li>
          <Link to="/entertainment">Entertainment</Link>
        </li>
        <li>
          <Link to="/gaming">Gaming</Link>
        </li>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/social-media">Social Media</Link>
        </li>
      </ul>
    </aside>
  );
}

function Display() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <h1>Hello</h1>
    </div>
  );
}

export default Display;
