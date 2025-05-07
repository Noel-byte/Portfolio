import React from 'react'

export const Project = ({project}) => {
  return (   
          <div
             key={project.title}
            className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-backcolor text-white px-4 py-8"
          >
            <h3 className=" font-titles text-2xl text-center  pb-3">
              {project.title}
            </h3>
            <hr className=' mb-2'/>
            <h4 className=" font-titles text-lg">Tech Stack</h4>
            <ul className=" list-disc px-3 py-1">
              {project.tech.map((item, index) => {
                const [key, value] = Object.entries(item)[0];
                return (
                  <li key={index} className=' font-text'>
                    <strong>{key} : </strong>
                    {value}
                  </li>
                );
              })}
            </ul>
              <div className=' max-w-sm flex flex-col gap-2 justify-around bg-dark py-4  px-2 text-center rounded mt-2 shadow-lg'>
                <h2 className='underline text-stone-50 mb-1 font-titles'>View Work On Github</h2>
              <a
              href={project.flink}
              target="_blank"
              className="  text-stone-100 font-buttons bg-stone-500 rounded py-1"
            >
            Frontend
            </a>
            {project.blink&& (<a
              href={project.blink}
              target="_blank"
              className="  text-stone-100 font-buttons bg-stone-500 py-1"
            >
         Backend
            </a>)}
            <hr />
               <h3 className=' font-titles'> OR </h3>
            <a
              href={project.weblink}
              target="_blank"
              className="  font-buttons bg-stone-500 text-white rounded py-1 mt-2"
            >
              Visit Site
            </a>
              </div>
           
          </div>
     
  )
}
