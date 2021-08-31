import React from 'react';

function ContainerOuter({ children }) {
  return <div className="container mx-auto max-w-1366px h-screen">{children}</div>;
}

export default ContainerOuter;
