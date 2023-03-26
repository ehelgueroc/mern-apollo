import React, { FC } from 'react'
import { TaskCard } from './TaskCard';

interface TaskInterface {
    _id: string;
    title: string;
}

interface TaskPropsInterface {
  tasks: TaskInterface[];
}

export const TaskList: FC<TaskPropsInterface> = ({ tasks }) => {
  return (
    <div>
      { tasks.map((task:TaskInterface) => {
        return <TaskCard key={task._id} task={task} />
      }) }
    </div>
  )
}
