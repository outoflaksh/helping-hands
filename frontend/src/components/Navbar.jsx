import { NavLink } from "react-router-dom";
import { Nav, NavItem, NavBrand } from "./styles/Nav.styled";

const Navbar = () => {
  return (
    <Nav>
      <NavBrand>
        <img src={"/logo.png"} alt="helping-hands-logo" />
      </NavBrand>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/jobs">Jobs</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">For clients</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">Events</NavLink>
      </NavItem>
    </Nav>
  );
};

export default Navbar;
