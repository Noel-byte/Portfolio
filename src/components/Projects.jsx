import React from 'react';

export const Projects = ({ projects }) => {
   
  return (
    <div className='flex flex-col items-center justify-center mt-8'>
      <h2 className=' text-2xl'>Projects</h2>
      <div className='m-3 flex flex-wrap justify-center gap-2 bg-stone-400 py-3 px-2 rounded-lg'>{projects.map((project,index) => {
         const url = `https://github.com/Noel-byte/${project.link}`
         return(
        <div key={index} className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white px-2 py-8'>
           <h3 className=' font-semibold text-lg'>{project.title}</h3>
           <p>this is a to do up Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident minus, iusto in optio numquam voluptates quis ipsam rem illo dolorem.</p> 
         
           <a href={url} target='_blank' className=' underline text-blue-500'>View on GitHub</a>
        </div>
         )
      })}
        
      </div>
    </div>
  );
};
