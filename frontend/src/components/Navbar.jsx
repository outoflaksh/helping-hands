import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {Nav, NavItem} from "../styles/Nav.styled";
import {Logo} from "../styles/logo.styled";
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


export default Navbar;
