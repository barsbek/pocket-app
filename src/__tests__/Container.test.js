import React from 'react';
import { shallow } from 'enzyme';

import Container from '../components/Container';
import ArticlePreview from '../components/ArticlePreview';
import Header from '../components/Header';
import GroupAction from '../components/GroupAction';

const articles = [
  {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  }, {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  },
];

describe('<Container />', () => {
  let wrapper;

  beforeEach(() => wrapper = shallow(<Container articles={articles}/>));

  test('should render <ArticlePreview /> component', () => {
    expect(wrapper.find(ArticlePreview))
      .toHaveLength(articles.length);
  });

  test('should render <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  test("should render <GroupAction /> component", () => 
    expect(wrapper.find(GroupAction)).toHaveLength(1)
  );
});