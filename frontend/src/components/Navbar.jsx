import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";
import { Nav, NavList, NavItem, NavBrand } from "./styles/Nav.styled";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Nav>
      <NavLink to="/">
        <NavBrand src={"./logo.png"} />
      </NavLink>
      <NavList>
        <NavItem>
          <NavLink to="/jobs">Jobs</NavLink>
        </NavItem>
        {
          currentUser ?
            <NavItem>
              <NavLink to="">Profile</NavLink>
            </NavItem>
            :
            <>
              <NavItem>
                <NavLink to="/auth/register">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/auth/login">Login</NavLink>
              </NavItem>
            </>
        }

        {/* <NavItem>
          <NavLink to="/">Events</NavLink>
        </NavItem> */}
      </NavList>
    </Nav>
  );
};

export default Navbar;
