import React from 'react';

export const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className=" text-2xl">Projects</h2>
      <div className="m-3 flex flex-wrap justify-center gap-5 bg-stone-400 py-3 px-2 rounded-lg">
        {projects.map((project, index) => {
          const url = `https://github.com/Noel-byte/${project.link}`;
          const weburl = `${project.weblink}`
          return (
            <div
              key={index}
              className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white px-2 py-8"
            >
              <h3 className=" font-bold text-2xl text-center underline pb-1">
                {project.title}
              </h3>
              <h4 className=" font-semibold text-lg">Tech Stack</h4>
              <ul className=" list-disc px-3 py-1">
                {project.tech.map((item, index) => {
                  const [key, value] = Object.entries(item)[0];
                  return (
                    <li key={index}>
                      <strong>{key} : </strong>
                      {value}
                    </li>
                  );
                })}
              </ul>
                <div className=' max-w-sm flex justify-around'>
                <a
                href={url}
                target="_blank"
                className=" underline text-blue-500"
              >
                View on GitHub
              </a>
              <a
                href={weburl}
                target="_blank"
                className=" underline text-blue-500"
              >
                Visit Site
              </a>
                </div>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};
