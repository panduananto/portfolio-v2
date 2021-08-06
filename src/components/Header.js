import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between font-title px-10 md:px-14 lg:px-20 xl:px-32 pt-8 md:pt-12 lg:pt-18 xl:pt-24">
        <span className="text-xl">
          <Link to="/">Pandu.</Link>
        </span>
        <ul className="flex flex-row items-center gap-x-6 font-light">
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
      </div>
    </>
  );
}

export default Header;
