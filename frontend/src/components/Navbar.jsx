import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src={"/logo.png"} alt="helping-hands-logo" />
      </Logo>
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

const NavItem = styled.li`
  margin: 10px;
  padding: 10px;
  font-weight: 600;
  font-size: 1rem;
  color: #4d5d77;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #cbe4dd;
`;

const Logo = styled.div`
  margin: 10px;
  img {
    height: 55px;
    width: auto;
  }
`;

export default Navbar;
