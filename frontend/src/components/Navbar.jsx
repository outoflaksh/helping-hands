import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src="" />
      </Logo>
      <NavItem>
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/">For workers</NavLink>
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
`;

const Nav = styled.nav`
  display: flex;
`;

const Logo = styled.div``;

export default Navbar;
