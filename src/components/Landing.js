import React from 'react';

import Contact from './Contact';
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
      <Contact></Contact>
    </>
  );
}

export default Landing;
