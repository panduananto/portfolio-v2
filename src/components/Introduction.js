import React from 'react';

import Container from './Container';

function Introduction() {
  return (
    <div className="transition duration-300 ease-in-out bg-white dark:bg-darker-gray">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-14 xl:gap-32">
          <div className="w-3/4">
            <span className="text-title mb-6">Hello, I'm</span>
            <h1 className="text-title text-indigo-600 dark:text-indigo-600 mb-6">Pandu Ananto Hogantara</h1>
            <p className="text-base sm:text-lg md:text-xl font-light text-gray-900 dark:text-gray-300">
              Final year student at UPN Veteran Jakarta majoring in Informatics with Data Science specialization. Detail
              oriented person, highly motivated, and have a high willingness to learn new things. Highly interested in
              machine learning, computer vision, and front-end web development
            </p>
          </div>
          <div className="flex-shrink-0 order-first md:order-last bg-photo-profile bg-shadow bg-cover bg-no-repeat rounded-full overflow-hidden h-40 md:h-56 w-40 md:w-56"></div>
        </div>
      </Container>
    </div>
  );
}

export default Introduction;
