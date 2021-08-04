import React from 'react';

import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div className="flex flex-row items-center justify-between font-title">
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
            <a href="" className="hover:underline">
              contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
