import React, { useLayoutEffect, useState } from "react";

export default function useResizeWindow() {
  const [winSize, setWinSize] = useState({width: 0, height: 0});

  const handleResize = () => {
    setWinSize({
        width: window.innerWidth,
        height: window.innerHeight
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  },[]);
  return winSize;
}
