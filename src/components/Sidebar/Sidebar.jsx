import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <h2>Navigation</h2>
      <div className="links">
        <Link to="/">
          <button>Users</button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
