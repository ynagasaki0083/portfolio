"use client";

import { ArrowTurnRightUpIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibirity = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibirity);
    return () => {
      window.removeEventListener("scroll", toggleVisibirity);
    };
  }, []);
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed bottom-4 animate-pulse right-4">
      {isVisible && (
        <button
          onClick={ScrollToTop}
          className="bg-blue-900 text-white rounded-full w-12 h-12 flex items-center
     justify-center focus:outline-none"
        >
          <ArrowTurnRightUpIcon />
        </button>
      )}
      scroll top
    </div>
  );
};

export default ScrollToTop;
