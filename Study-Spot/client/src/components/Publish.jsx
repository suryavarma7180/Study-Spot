import React, { useState } from 'react';
import "./styles.css";
import axios from 'axios';


function Publish() {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [article, setArticle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const articleData={
        title:title,
        name:name,
        category:category,
        article:article
    };
    axios.post('http://localhost:8080/api/article',articleData)
        .then(response=>{
            console.log("article saved successfully",response.data);
            setTitle('');
            setName('');
            setCategory('');
            setArticle('');
        })
        .catch(error=>{
            console.error('error saving article',error);
        });
    console.log('Article submitted:', { title, name, category, article });
    // Add code to submit article to server here
  }

  return (
    <div className="publish-article-container">
      <h1 className="title">Publish an Article</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="label">Title:</label>
          <input type="text" id="title" className="input" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="label">Name:</label>
          <input type="text" id="name" className="input" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="category" className="label">Category:</label>
          <div className="radio-group">
            <label htmlFor="technology" className="radio-label">
              <input type="radio" id="technology" name="category" value="technology" checked={category === 'technology'} onChange={(event) => setCategory(event.target.value)} />
              Technology
            </label>
            <label htmlFor="sports" className="radio-label">
              <input type="radio" id="sports" name="category" value="sports" checked={category === 'sports'} onChange={(event) => setCategory(event.target.value)} />
              Sports
            </label>
            <label htmlFor="social-media" className="radio-label">
              <input type="radio" id="social-media" name="category" value="social-media" checked={category === 'social-media'} onChange={(event) => setCategory(event.target.value)} />
              Social Media
            </label>
            {/* Add more radio buttons for other categories here */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="article" className="label">Article:</label>
          <textarea id="article" className="textarea" value={article} onChange={(event) => setArticle(event.target.value)} />
        </div>
        <button type="submit" className="button">Publish</button>
      </form>
    </div>
  );
}

export default Publish;
