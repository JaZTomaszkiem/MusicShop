import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { basicRoute } from 'routes/routes';

const MainWrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: black;
  /* align-items: center; */
`;
const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
  cursor: pointer;
  width: 50%;
  /* background-color: red; */
`;
const ListItem = styled.li`
  display: flex;
  padding: 25px 0;
`;
const StyledNavlink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &:visited {
    color: white;
  }
  &.active {
    color: red;
  }
`;

const NavBar = () => {
  return (
    <MainWrapper>
      <Wrapper>
        <ListItem>
          <StyledNavlink to={basicRoute.admin}>Admin</StyledNavlink>
        </ListItem>
        <ListItem>
          <StyledNavlink to={basicRoute.about}>About</StyledNavlink>
        </ListItem>
        <ListItem>
          <StyledNavlink to={basicRoute.products}>Products</StyledNavlink>
        </ListItem>
        <ListItem>
          <StyledNavlink to={basicRoute.contact}>Contact</StyledNavlink>
        </ListItem>
      </Wrapper>
    </MainWrapper>
  );
};

export default NavBar;
