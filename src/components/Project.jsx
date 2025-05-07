import React from 'react'

export const Project = ({project}) => {
  return (   
          <div
             key={project.title}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-gray-800 text-white px-4 py-8"
          >
            <h3 className=" font-bold text-2xl text-center underline pb-3">
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
              <div className=' max-w-sm flex flex-col gap-2 justify-around bg-stone-400 p-2 text-center rounded mt-2 shadow-lg'>
                <h2 className='underline text-gray-900 mb-1'>View Work On Github</h2>
              <a
              href={project.flink}
              target="_blank"
              className="  text-stone-100 font-bold bg-stone-500 rounded py-1"
            >
            Frontend
            </a>
            {project.blink&& (<a
              href={project.blink}
              target="_blank"
              className="  text-stone-100 font-bold bg-stone-500 py-1"
            >
         Backend
            </a>)}
            <hr />
               <h3> OR </h3>
            <a
              href={project.weblink}
              target="_blank"
              className="  font-semibold bg-stone-500 text-white rounded py-1 mt-2"
            >
              Visit Site
            </a>
              </div>
           
          </div>
     
  )
}
