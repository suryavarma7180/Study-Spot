import React from 'react';

function Article({ title, name, category, article }) {
  return (
    <div className="article">
      <h2 className="article-title">{title}</h2>
      <p className="article-author">{name}</p>
      <p className="article-category">{category}</p>
      <p className="article-content">{article}</p>
    </div>
  );
}

export default Article;