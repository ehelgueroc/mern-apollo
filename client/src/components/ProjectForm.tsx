import React, { useState } from 'react'

export const ProjectForm = () => {

  const [form, setForm] = useState({ name: '', description: ''});
  return (
    <div>
        <h3>Create a new project</h3>
        <form>
            <label>Project name</label>
            <input type="text" name="name" />
            <label>Project description</label>
            <input type="text" name="description" />
        </form>
    </div>
  )
}