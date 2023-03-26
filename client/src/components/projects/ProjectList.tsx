import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../../graphql/projects';
import { ProjectCard } from './ProjectCard';

export const ProjectList = () => {
  const { loading, error, data} = useQuery(GET_PROJECTS);

    if(loading) {
        return <p>Loading...</p>
    }

  return (
    <div className="overflow-y-auto w-full px-5">
        {data.projects.map((project:any) => {
            return <ProjectCard key={project._id} project={project} />
        })}
    </div>
  )
}