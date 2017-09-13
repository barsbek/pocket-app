import React, {Component} from 'react';

import './Container.css';

import Header from './Header';
import ArticlePreview from './ArticlePreview';
import GroupAction from './GroupAction';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: props.articles,
    }
    this.bookmarkedNumber = 0;
    this.selectedNumber = 0;
  }

  // handlers
  handleSelect(e, index) {
    e.preventDefault();
    const articles = this.props.articles.slice();
    articles[index].selected = !articles[index].selected;
    if(articles[index].selected) this.selectedNumber++;
    else this.selectedNumber--;
    console.log(this.selectedNumber);
    this.setState({articles: articles});
  }

  handleBookmark(e, index) {
    e.preventDefault();
    const articles = this.props.articles.slice();
    articles[index].bookmarked = !articles[index].bookmarked;
    if(articles[index].bookmarked) this.bookmarkedNumber++;
    else this.bookmarkedNumber--;

    this.setState({articles: articles});
  }

  bookmarkAll = (e) => {
    e.preventDefault();
    let allBookmarked = this.bookmarkedNumber === this.state.articles.length;
    console.log(allBookmarked);
    if(allBookmarked) this.bookmarkedNumber = 0;
    else this.bookmarkedNumber = this.state.articles.length;

    const articles = this.props.articles.map((article, index) => {
      article.bookmarked = !allBookmarked;
      return article;
    });

    this.setState({
      articles: articles,
    });
  }

  selectAll = (e) => {
    e.preventDefault();
    let allSelected = this.selectedNumber === this.state.articles.length;
    if(allSelected) this.selectedNumber = 0;
    else this.selectedNumber = this.state.articles.length;

    const articles = this.props.articles.map((article, index) => {
      article.selected = !allSelected;
      return article;
    });

    this.setState({
      articles: articles,
    });
  }


  renderArticles() {
    return this.state.articles.map((article, index) => 
      <ArticlePreview
        key={index}
        {...article}
        onSelect={(e) => this.handleSelect(e, index)}
        onBookmark={(e) => this.handleBookmark(e, index)}
      />
    )
  }

  render() {
    const articlePreviews = this.renderArticles();

    return (
      <main className="main-container">
        <Header />
        <section className="article-previews">
          {articlePreviews}
        </section>
        <GroupAction
          bookmarkAll={this.bookmarkAll}
          selectAll={this.selectAll}
        />
      </main>
    )
  }
}

export default Container;