'use client'
import { useState } from "react"


const AddArticle = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = {title, body}

    try {
      const response = await fetch('http://localhost:3001/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Article created successfully');
        setTitle('');
        setBody('');
      } else {
        console.log('Failed to create article');
      }
    } catch (error) {
      console.log('Error while creating article', error);
    }

  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };


  return (
    <div>
      <h2>Add New Article</h2>
      <form method="post" onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} name={title} onChange={handleTitleChange} />
        </div>
        <div>
          <label>Body:</label>
          <textarea value={body} name={body} onChange={handleBodyChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddArticle