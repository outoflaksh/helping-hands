import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 0 25px;
    padding: 10px 0;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`
  margin: 10px;
  font-weight: 700;
  font-size: 1rem;
  color: #72819a;
`;

export const NavBrand = styled.img`
  margin: 10px;
  height: 70px;
  width: auto;
`;
