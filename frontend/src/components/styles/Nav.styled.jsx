import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #cbe4dd;
`;

export const NavItem = styled.li`
  margin: 10px;
  padding: 10px;
  font-weight: 600;
  font-size: 1rem;
  color: #4d5d77;
`;

export const NavBrand = styled.div`
  margin: 10px;
  img {
    height: 55px;
    width: auto;
  }
`;
