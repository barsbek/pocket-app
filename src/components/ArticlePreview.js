import React, {Component} from 'react';

import './ArticlePreview.css';

class ArticlePreview extends Component{
  render() {
    const articleClasses = [
      "article-preview",
      this.props.selected ? "article-preview-selected" : null,
      this.props.bookmarked ? "article-preview-bookmarked" : null,
    ].join(' ');

    return (
      <article className={articleClasses}>
        <a className="article-preview-link"
          href={this.props.link}>
          <button className="article-preview-select"
            href="#"
            onClick={this.props.onSelect}>
          </button>
          <div className="article-preview-image"
            style={{backgroundImage: `url(${this.props.img})`}}>
          </div>
          <h3 className="article-preview-header">
            {this.props.title}
          </h3>
        </a>
        <div className="article-preview-body">
          <a className="article-preview-bookmark"
            href="#"
            onClick={this.props.onBookmark}>
            {this.props.bookmarked ? "Bookmarked" : "Bookmark the article"}
          </a>
        </div>
      </article>
    )
  }
}

export default ArticlePreview;