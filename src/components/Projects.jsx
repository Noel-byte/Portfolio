import React from 'react';
import { Project } from './Project';

export const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <h2 className=" text-2xl">Projects</h2>
      <div className="m-3 flex flex-wrap justify-center gap-5 bg-stone-400 py-3 px-2 rounded-lg">
     <Project project={projects.todo}/>
     <Project project={projects.portfolio} />
      </div>
    </div>
  );
};
