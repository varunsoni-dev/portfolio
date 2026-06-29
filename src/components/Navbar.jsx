import'./Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">Varun Soni</h1>

      <ul className="nav-links">
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Certification</li>
        <li>Contact</li>
      </ul>

      <button className="resume-btn">
        Resume
      </button>
    </nav>
  );
}

export default Navbar;