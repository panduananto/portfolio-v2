import React from 'react';

import { FaSmile } from 'react-icons/fa';

import Container from './Container';

function Resume() {
  return (
    <Container>
      <object
        data="https://drive.google.com/file/d/13-NLzpYuBf7cdk38GRXJUCfibl4leH4G/preview"
        type="application/pdf"
        className="h-500px md:h-1100px w-full"
      >
        <p>
          Failed to load PDF. Please use your laptop/desktop to open this document <FaSmile></FaSmile>
        </p>
      </object>
    </Container>
  );
}

export default Resume;
