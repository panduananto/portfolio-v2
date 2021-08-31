import React from 'react';

function Container({ children }) {
  return <div className="h-full px-10 md:px-14 lg:px-20 xl:px-32 py-16 lg:py-20 xl:py-24">{children}</div>;
}

export default Container;
