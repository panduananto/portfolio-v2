import React from 'react';

function ProjectItem({ picture, name, demo, code, description, tools }) {
  return (
    <div>
      {picture ? (
        <img className="filter drop-shadow-2xl w-full h-full mb-14" src={picture} alt="thumbnail projects"></img>
      ) : (
        <></>
      )}
      <div className="flex flex-row items-start justify-between mb-4">
        <h2 className="text-xl md:text-4xl font-bold font-title text-gray-900 dark:text-gray-300">{name}</h2>
        <div className="flex flex-row items-center gap-4">
          {demo ? (
            <a
              href={demo}
              className="transition duration-100 ease-in-out border-2 border-indigo-600 hover:bg-indigo-600 rounded-sm text-indigo-600 hover:text-white px-3 py-1"
            >
              Demo
            </a>
          ) : (
            <></>
          )}
          {code ? (
            <a
              href={code}
              className="transition duration-100 ease-in-out border-2 border-indigo-600 hover:bg-indigo-600 rounded-sm text-indigo-600 hover:text-white px-3 py-1"
            >
              Code
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <p className="text-lg md:text-xl font-light text-gray-900 dark:text-gray-300 mb-4">{description}</p>
      <div className="flex flex-row flex-wrap items-start gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="rounded-sm bg-indigo-600 text-xs md:text-base text-white dark:text-white font-light px-2.5 py-1"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
