import React from 'react';
import { mount } from 'enzyme';

import Container from '../components/Container';
import ArticlePreview from '../components/ArticlePreview';

const articles = [
  {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  }
];

describe("component <ArticlePreview />", () => {
  let wrapper; 
  beforeEach(() => {
    const container = mount(<Container articles={articles} />)
    wrapper = container.find(ArticlePreview).first();
  });

  test("should be bookmarkable", () => {
    const bookmark = wrapper.find('.article-preview-bookmark');
    bookmark.simulate('click');
    expect(wrapper.prop('bookmarked')).toBeTruthy();
  });

  test("should be selectable", () => {
    const select = wrapper.find('.article-preview-select');
    select.simulate('click');
    expect(wrapper.prop('selected')).toBeTruthy();
  });
});