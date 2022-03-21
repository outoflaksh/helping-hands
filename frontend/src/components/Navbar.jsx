import { NavLink } from "react-router-dom";
import { Nav, NavList, NavItem, NavBrand } from "./styles/Nav.styled";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">
        <NavBrand src={"./logo.png"} />
      </NavLink>
      <NavList>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/auth/worker/register">For workers</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/auth/client/register">For clients</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/">Events</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
