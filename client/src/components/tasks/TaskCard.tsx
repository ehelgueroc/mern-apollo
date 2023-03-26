import React, { FC } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../graphql/tasks';
import { AiOutlineDelete } from 'react-icons/ai';

interface TaskProps {
    task: {
        _id: string;
        title: string;
    }
}

export const TaskCard: FC<TaskProps> = ({task}) => {

  const [deleteTask, {error}] = useMutation(DELETE_TASK, { refetchQueries: ['getProject']});

  const handleClick = async () => {
    const data = await deleteTask({ variables: { id: task._id } });
  }

  if(error) return <p>There was an error deleting the task</p>;

  return (
    <div className="bg-zinc-900 px-5 py-3 mb-2 flex justify-between rounded-lg">
        <h4 className="text-sm">{task.title}</h4>
        <button className="bg-red-500 rounded-full px-2 py-2" onClick={handleClick}>
          <AiOutlineDelete />
        </button>
    </div>
  )
}