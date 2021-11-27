import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Test = styled.div`
  padding-left: 330px;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Test>{children}</Test>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
