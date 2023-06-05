import React, { useState, useEffect } from 'react';
import Sidebar from './nav/SideBar';
import Topbar from './nav/TopBar';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div>
          <Sidebar />
        </div>
      ) : (
        <div>
          <Topbar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
