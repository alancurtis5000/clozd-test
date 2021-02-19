import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div
      className="Header"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          margin: 0,
        }}
      >
        Alan Curtis: Get all the Users
        <Link to="/clozd-test/">
          <button>Users</button>
        </Link>
      </h1>
    </div>
  );
};

export default Header;
