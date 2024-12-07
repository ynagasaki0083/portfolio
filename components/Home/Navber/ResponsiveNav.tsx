"use client";

import React, { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

interface ResponsiveNavProps {
  className?: string; // className をオプションとして受け取る
}

const ResponsiveNav: React.FC<ResponsiveNavProps> = ({ className }) => {
  const [showNav, setShowNav] = useState(false);

  const showNavHandler = () => setShowNav(true);
  const closeNavHandler = () => setShowNav(false);

  return (
    <div className={`relative ${className}`}>
      <Nav openNav={showNavHandler} />
      <MobileNav showNav={showNav} closeNav={closeNavHandler} />
    </div>
  );
};

export default ResponsiveNav;
