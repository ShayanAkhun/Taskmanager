"use client"
import React from 'react'

function CreateContent() {

  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState("");
  const [date, setDate] = React.useState("");
  const [completed, setCompleted] = React.useState(false);
  const [important, setImportant] = React.useState(false);

  const handleChange = (name: string) => (e: any) => {
    switch (name) {
      case 'title':
        setTitle(e.target.value);
        break
      case 'description':
        setDescription(e.target.value);
        break
      case 'date':
        setDate(e.target.value);
        break
      case 'completed':
        setCompleted(e.target.value);
        break
      case 'important':
        setImportant(e.target.value);
        break
        default : 
        break
    }
  }



  return (
    <div>

      <h1>Create Content</h1>
      <div className="input-control">
        <label htmlFor="title">Title</label>
        <input type="text" id='title' value={title} name='title' onChange={handleChange("title")} placeholder='e.g, a video from fireship' />
      </div>
      <div className="input-control">
        <label htmlFor="decription">Description</label>
        <textarea id='description' value={description} name='description' onChange={handleChange("description")} rows={4} placeholder='e.g, a video from fireship' />
      </div>
      <div className="input-control">
        <label htmlFor="date">Date</label>
        <input type="date" id='date' value={date} name='date' onChange={handleChange("date")} />
      </div>
      <div className="input-control">
        <label htmlFor="completed">Toggle Complete</label>
        <input type="checkbox" id='completed' value={completed.toString()} name='completed' onChange={handleChange("completed")} />
      </div>
      <div className="input-control">
        <label htmlFor="important">Toggle important</label>
        <input type="checkbox" id='important' value={important.toString()} name='important' onChange={handleChange("important")} />
      </div>
      <div className="submit-btn">
        <button type="submit">
          <span>Submit</span>
        </button>
      </div>
    </div>
  )
}

export default CreateContent