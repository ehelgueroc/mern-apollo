import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, GET_PROJECTS } from '../../graphql/projects';

export const ProjectForm = () => {

  const [createProject, { loading: isLoading, error }] = useMutation(CREATE_PROJECT, { refetchQueries: [
    { query: GET_PROJECTS }, "GetProjects"
  ]});
  const [project, setProject] = useState({ name: '', description: ''});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProject({...project, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createProject({
      variables: project
    })
  }
  
  return (
    <div>
        <h3>Create a new project</h3>
        
        {error && <p>{error.message}</p>}

        <form onSubmit={handleSubmit}>
            <label>Project name</label>
            <input type="text" name="name" onChange={handleChange} className="bg-zinc-800 text-white rounded-lg p-4 block w-full mb-3"/>
            <label>Project description</label>
            <input type="text" name="description" onChange={handleChange} className="bg-zinc-800 text-white rounded-lg p-4 block w-full mb-3"/>
            <button className="bg-blue-500 px-4 py-1 rounded-md text-lg mb-3 disabled:bg-zinc-400" disabled={!project.name || !project.description || isLoading}>Create</button>
        </form>
    </div>
  )
}