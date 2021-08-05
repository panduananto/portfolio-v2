import React from 'react';

function ProjectItem({ picture, name, demo, code, description, tools }) {
  return (
    <li>
      {picture ? (
        <img className="filter drop-shadow-2xl w-full h-full mb-14" src={picture} alt="thumbnail projects"></img>
      ) : (
        <></>
      )}
      <div className="flex flex-row items-start justify-between mb-4">
        <h2 className="text-xl md:text-4xl font-bold font-title">{name}</h2>
        <div className="flex flex-row items-center gap-4">
          {demo ? (
            <a href={demo} className="btn-primary">
              Demo
            </a>
          ) : (
            <></>
          )}
          {code ? (
            <a href={code} className="btn-primary">
              Code
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <p className="text-lg md:text-xl font-light text-gray-600 mb-4">{description}</p>
      <div className="flex flex-row flex-wrap items-start gap-2">
        {tools.map((tool, index) => (
          <span key={index} className="rounded-sm bg-indigo-600 text-xs md:text-base text-white font-thin px-2.5 py-1">
            {tool}
          </span>
        ))}
      </div>
    </li>
  );
}

export default ProjectItem;
