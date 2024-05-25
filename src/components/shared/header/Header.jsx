import propTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app-header">
      <div className="logo">
        <h1>
          <Link to="/">Student Manager</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/students">Student List</Link>
          </li>
          <li>
            <Link to="/students/new">New Student</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Header.defaultProps = {
  title: "default title",
  navElements: ["elem1", "elem2", "elem3"],
};

Header.propTypes = {
  title: propTypes.string.isRequired,
  navElements: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Header;
