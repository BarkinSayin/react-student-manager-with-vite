import propTypes from "prop-types";

const Header = ({ title, navElements }) => {
  return (
    <div className="app-header">
      <div className="logo">
        <h1>{title}</h1>
      </div>
      <nav>
        <ul>
          {navElements.map((navElement) => (
            <li key={navElement}>
              <a href="#">{navElement}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Header.defaultProps = {
//   title: "default title",
//   navElements: ["elem1", "elem2", "elem3"],
// };

Header.propTypes = {
  title: propTypes.string.isRequired,
  navElements: propTypes.arrayOf(propTypes.string).isRequired,
};

export default Header;
