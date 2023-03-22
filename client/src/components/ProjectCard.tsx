import React, { FC } from 'react'

interface ProjectCardProps {
    project: {
        _id: string,
        name: string
    }
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
    console.log(project);
  return (
    <div>
        <h3>ID: {project._id}</h3>
        <h4>Name: {project.name}</h4>
    </div>
  )
}