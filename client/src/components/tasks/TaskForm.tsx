import React, { useState, FC } from 'react'
import { useMutation } from '@apollo/client';
import { CREATE_TASK } from '../../graphql/tasks';
import { GET_PROJECT } from '../../graphql/projects';

interface TaskFormPropsInterface {
  projectId: string | undefined;
}

export const TaskForm: FC<TaskFormPropsInterface> = ({ projectId }) => {

  const [createTask, { loading, error}] = useMutation(CREATE_TASK, { refetchQueries: ["getProject"]})

  const [task, setTask ] = useState({title: '', projectId });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask({...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({ variables: task});
    setTask({...task, title: ''})
  }

  if(error) return <p>There was an error</p>;

  return (
    <form onSubmit={handleSubmit}>
      <h4>Create a new task for this project</h4>
      <input type="text" name="title" value={task.title} onChange={handleChange} className="bg-zinc-900 block text-white w-full rounded-lg mb-2 px-4 py-2" placeholder='Add a task'/>
      <button className="bg-sky-900 rounded-md py-2 block w-full" disabled={loading || !task.title}>Create</button>
    </form>
  )
}