import React from 'react'

export const Project = ({project}) => {
  return (   
          <div
             key={project.title}
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
              <div className=' max-w-sm flex flex-col justify-around bg-stone-400 p-2 text-center rounded mt-2 shadow-lg'>
              <a
              href={project.flink}
              target="_blank"
              className="  text-blue-500 hover:text-blue-800 font-semibold"
            >
             GitHub - Frontend
            </a>
            {project.blink&& (<a
              href={project.blink}
              target="_blank"
              className="  text-blue-500 hover:text-blue-800 font-semibold"
            >
           GitHub - Backend
            </a>)}
           
            <a
              href={project.weblink}
              target="_blank"
              className="  text-blue-500 hover:text-blue-800 font-semibold"
            >
              Visit Site
            </a>
              </div>
           
          </div>
     
  )
}
