import React from 'react';

import Container from './Container';
import Header from './Header';

function Resume() {
  return (
    <Container>
      <Header></Header>
      <object
        data="https://drive.google.com/file/d/13-NLzpYuBf7cdk38GRXJUCfibl4leH4G/preview"
        type="application/pdf"
        className="h-500px md:h-1100px w-full mt-16 md:mt-28"
      >
        <p>Failed to load PDF.</p>
      </object>
    </Container>
  );
}

export default Resume;
