import { NovelsData } from "../assets/NovelsData";
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My Novel Collection</h1>
      <div className="links">
        <a href="/">Home</a>
        <a
          href="/"
          style={{
            color: "white",
            backgroundColor: "#03d6f3",
            borderRadius: "8px",
          }}
        >
          New Novel
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
