import React from 'react';

import './Container.css';

import Header from './Header';
import ArticlePreview from './ArticlePreview';

export default (props) => {
  let articlePreviews = props.articles.map((article, index) => 
    <ArticlePreview
      key={index}
      title={article.title}
      img={article.img}
      link={article.link}
    />
  )

  return (
    <main className="main-container">
      <Header />
      <section className="article-previews">
        {articlePreviews}
      </section>
    </main>
  )
}