import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div>Sidebar</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Landing">Landing</Link>
        <Link to="/StyleGuide">StyleGuild</Link>
        <Link to="/NotFound">NotFound</Link>
      </div>
    </div>
  );
};

export default Sidebar;
