import React from 'react';
import { IconContext } from 'react-icons/lib';
import { FaEnvelope, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

import Container from './Container';

function Contact() {
  return (
    <Container>
      <h3 className="text-title mb-6">Get in touch</h3>
      <p className="font-thin text-lg md:text-3xl mb-6 pr-0 lg:pr-24">
        I would be very happy to discuss my experiences with you, send me an email or message me on LinkedIn!
      </p>
      <a href="mailto:panduanantoh@gmail.com" id="contact" className="block font-thin text-2xl hover:underline mb-6">
        panduanantoh@gmail.com
      </a>
      <IconContext.Provider
        value={{ className: 'transition-transform h-8 md:h-12 w-8 md:w-12 transform hover:scale-125' }}
      >
        <div className="flex flex-row items-start gap-4">
          <a href="mailto:panduanantoh@gmail.com">
            <FaEnvelope></FaEnvelope>
          </a>
          <a href="https://www.linkedin.com/panduanantoh">
            <FaLinkedin></FaLinkedin>
          </a>
          <a href="https://www.github.com/panduananto">
            <FaGithubSquare></FaGithubSquare>
          </a>
        </div>
      </IconContext.Provider>
    </Container>
  );
}

export default Contact;
