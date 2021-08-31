import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import Container from './Container';

function Contact() {
  return (
    <div className="transition duration-300 ease-in-out bg-white dark:bg-darker-gray">
      <Container>
        <h3 className="text-title mb-6">Get in touch</h3>
        <p className="font-thin text-lg md:text-3xl text-gray-900 dark:text-gray-300 mb-6 pr-0 lg:pr-24">
          I would be very happy to discuss my experiences with you, send me an email or message me on LinkedIn!
        </p>
        <a
          href="mailto:panduanantoh@gmail.com"
          id="contact"
          className="inline-block font-thin text-2xl hover:underline text-gray-900 dark:text-gray-300 mb-6"
        >
          panduanantoh@gmail.com
        </a>
        <IconContext.Provider value={{ className: 'transition-transform h-8 md:h-10 w-8 md:w-10 transform hover:scale-125' }}>
          <div className="flex flex-row items-start gap-4 text-gray-900 dark:text-gray-300">
            <a href="mailto:panduanantoh@gmail.com">
              <FaEnvelope></FaEnvelope>
              <span className="sr-only">Email</span>
            </a>
            <a href="https://www.linkedin.com/in/panduanantoh/">
              <FaLinkedin></FaLinkedin>
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://www.github.com/panduananto">
              <FaGithubSquare></FaGithubSquare>
              <span className="sr-only">Github</span>
            </a>
          </div>
        </IconContext.Provider>
      </Container>
    </div>
  );
}

export default Contact;
