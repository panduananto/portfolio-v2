import React from 'react';

import Container from './Container';

function Resume() {
  return (
    <div className="transition duration-300 ease-in-out bg-white dark:bg-darker-gray min-h-full">
      <Container>
        <object
          data="https://drive.google.com/file/d/1Pgav0VYnflbBzs4r5B49rAUFcoBfjSz9/preview"
          type="application/pdf"
          className="h-500px md:h-1100px w-full"
        >
          <p className="text-gray-900 dark:text-gray-300">
            Failed to load PDF. Please use your laptop/desktop to open this document. Or you can visit it{' '}
            <a
              href="https://drive.google.com/file/d/1Pgav0VYnflbBzs4r5B49rAUFcoBfjSz9/view?usp=sharing"
              className="text-indigo-600 hover:underline"
            >
              here
            </a>
            .
          </p>
        </object>
      </Container>
    </div>
  );
}

export default Resume;
