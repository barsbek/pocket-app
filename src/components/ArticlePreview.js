import React, {Component} from 'react';

import './ArticlePreview.css';

class ArticlePreview extends Component{
  constructor() {
    super();
    this.state={
      selected: false,
      bookmarked: false,
    }
  }

  // handlers
  handleSelect = (e) => {
    e.preventDefault();
    this.setState({
      selected: !this.state.selected,
    });
  }

  handleBookmark = (e) => {
    e.preventDefault();
    this.setState({
      bookmarked: !this.state.bookmarked,
    });
  }


  render() {
    const articleClasses = [
      "article-preview",
      this.state.selected ? "article-preview-selected" : null,
      this.state.bookmarked ? "article-preview-bookmarked" : null,
    ].join(' ');

    return (
      <article className={articleClasses}>
        <a className="article-preview-link"
          href={this.props.link}>
          <button className="article-preview-select"
            href="#"
            onClick={this.handleSelect}>
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
            onClick={this.handleBookmark}>
            {this.state.bookmarked ? "Bookmarked" : "Bookmark the article"}
          </a>
        </div>
      </article>
    )
  }
}

export default ArticlePreview;