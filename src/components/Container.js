import React from 'react';

function Container({ children }) {
  return <div className="container mx-auto px-10 xl:px-32 py-12 xl:py-24">{children}</div>;
}

export default Container;
