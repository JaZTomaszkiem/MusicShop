import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';

const Test = styled.div`
  /* padding-left: 330px; */
`;

export function MainTemplate({ children }) {
  return (
    <>
      <NavBar></NavBar>
      <Test>{children}</Test>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
