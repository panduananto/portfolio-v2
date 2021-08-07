import React, { useEffect, useState } from 'react';
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';

function DarkSwitch() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem('theme', theme);
  }, [theme, colorTheme]);

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <div
      onClick={handleClick}
      className={`flex flex-row rounded-full ${
        theme === 'light' ? 'justify-start' : 'justify-end'
      } items-center bg-gray-300 dark:bg-indigo-600 cursor-pointer p-1 w-16 h-8`}
    >
      <span className="flex justify-center items-center flex-grow-0 flex-shrink-0 rounded-full bg-white text-gray-900 w-6 h-6">
        {theme === 'light' ? <HiLightBulb></HiLightBulb> : <HiOutlineLightBulb></HiOutlineLightBulb>}
      </span>
    </div>
  );
}

export default DarkSwitch;
