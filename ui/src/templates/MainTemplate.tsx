import React from 'react';
import styled from 'styled-components';
import NavBar from 'components/NavBar/NavBar';

const Test = styled.div`
  /* padding-left: 330px; */
`;

type MainTemplateProps = {
  children: JSX.Element;
};

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <NavBar></NavBar>
      <Test>{children}</Test>
    </>
  );
}

export default MainTemplate;
