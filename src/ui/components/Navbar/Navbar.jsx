import PropTypes from "prop-types";
import "./Navbar.scss";

const Navbar = ({ onLogout, onSave, user }) => {
  return (
    <nav className="navbar">
      <span className="navbar__user">{user}</span>

      <section className="navbar__actions">
        <button type="button" onClick={onSave}>
          Save
        </button>
        <button type="button" onClick={onLogout}>
          Logout
        </button>
      </section>
    </nav>
  );
};

Navbar.propTypes = {
  onLogout: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default Navbar;
