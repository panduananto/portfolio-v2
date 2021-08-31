import React from 'react';
import { Link } from 'react-router-dom';

import DarkSwitch from './DarkSwitch';

function Header() {
  return (
    <>
      <div className="transition duration-300 ease-in-out flex flex-row items-center justify-between bg-white dark:bg-darker-gray font-title px-10 md:px-14 lg:px-20 xl:px-32 pt-8 md:pt-12 lg:pt-18 xl:pt-24">
        <span className="text-xl text-gray-900 dark:text-gray-300">
          <Link to="/">Pandu.</Link>
        </span>
        <div className="flex flex-row gap-6">
          <ul className="flex flex-row items-center gap-x-6 font-light text-gray-900 dark:text-gray-300">
            <li>
              <Link to="/resume" className="hover:underline">
                resume
              </Link>
            </li>
            <li>
              <a href="/#contact" className="hover:underline">
                contact
              </a>
            </li>
          </ul>
          <DarkSwitch></DarkSwitch>
        </div>
      </div>
    </>
  );
}

export default Header;
