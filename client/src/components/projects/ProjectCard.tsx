import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
    project: {
        _id: string,
        name: string,
        description: string;
    }
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
const navigate = useNavigate();
  return (
    <div onClick={() => navigate(`/projects/${project._id}`)}
    className="bg-zinc-800 w-full rounded-lg shadow-lg shadow-black p-4 mb-4 hover:bg-zinc-700 hover:cursor-pointer">
        <h2>Name: {project.name}</h2>
        <p>Description: {project.description}</p>
    </div>
  )
}