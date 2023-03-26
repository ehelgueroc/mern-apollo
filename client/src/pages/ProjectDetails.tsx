import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../graphql/projects';
import { TaskForm, TaskList } from '../components/tasks';

export const ProjectDetails = () => {
  const { id } = useParams();

  const { loading: isLoading, error, data} = useQuery(GET_PROJECT, { variables: { id }});

  console.log(isLoading);
  if(isLoading) return <p>Loading...</p>;
  if(error) return <p>{error.message}</p>;

  const { name, description, createdAt, tasks } = data?.project;

  return (
    <div>
      <Link to='/'>
      <button className='bg-blue-500 px-2 py-2 rounded-lg'>Back to project list</button>
      </Link>
      <div>
        <h1 className=" text-2xl">{name}</h1>
        <p>{description}</p>
        <p>{createdAt}</p>
        <button className="bg-red-500 px-3 py-2 rounded-md">Delete project</button>
        <TaskForm projectId={id} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  )
}