import React from 'react';

function Container({ children }) {
  return <div className="px-10 md:px-14 lg:px-20 xl:px-32 py-8 md:py-12 lg:py-18 xl:py-24">{children}</div>;
}

export default Container;
