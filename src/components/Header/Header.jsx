import { Link } from "react-router-dom";
import { Button } from "antd";
const Header = () => {
  return (
    <div className="Header">
      <h1 className="title">Alan Curtis</h1>
      <div className="navigation">
        <h2>Navigation</h2>
        <Link to="/">
          <Button>Users</Button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
