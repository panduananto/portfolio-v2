import React from 'react';

import Container from './Container';
import Header from './Header';
import Introduction from './Introduction';
import Project from './Project';

function Landing() {
  return (
    <>
      <Container>
        <Header></Header>
        <Introduction></Introduction>
      </Container>
      <Project></Project>
    </>
  );
}

export default Landing;
