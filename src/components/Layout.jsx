import React from 'react';

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-black">
      {children}
    </div>
  );
}

export default Layout;