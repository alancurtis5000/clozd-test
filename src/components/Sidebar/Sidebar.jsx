import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>Sidebar</div>
      <div className="links">
        <Link to="/">Users</Link>
      </div>
    </div>
  );
};

export default Sidebar;
