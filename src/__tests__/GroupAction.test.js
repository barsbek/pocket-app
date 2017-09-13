import React from 'react';
import { mount } from 'enzyme';

import Container from '../components/Container';
import ArticlePreview from '../components/ArticlePreview';
import GroupAction from '../components/GroupAction';

const articles = [
  {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  },
  {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  },
  {
    title: 'this is a big header of the first article',
    link: 'https://tinybuddha.com/',
    img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'
  },
];

describe('component <GroupAction />', () => {
  let groupAction, container;

  beforeEach(() => {
    container = mount(<Container articles={articles} />);
    groupAction = container.find(GroupAction);
  });

  test("should bookmark all previews", () => {
    const bookmarkAll = groupAction.find('.group-action-bookmark-all').first();
    bookmarkAll.simulate('click');
    container.find(ArticlePreview).forEach(preview => {
      expect(preview.prop('bookmarked')).toBeTruthy();
    });
  });

  test("should remove bookmarks if all previews are bookmarked", () => {
    const bookmarkAll = groupAction.find('.group-action-bookmark-all').first();
    bookmarkAll.simulate('click'); //bookmark all
    bookmarkAll.simulate('click'); //remove all bookmarks
    container.find(ArticlePreview).forEach(preview => {
      expect(preview.prop('bookmarked')).toBeFalsy();
    });
  });

  test("should select all previews", () => {
    const selectAll = groupAction.find('.group-action-select-all').first();
    selectAll.simulate('click');
    container.find(ArticlePreview).forEach(preview => {
      expect(preview.prop('selected')).toBeTruthy();
    });
  });

  test("should remove selects if all previews are selected", () => {
    const selectAll = groupAction.find('.group-action-select-all').first();
    selectAll.simulate('click'); //select all
    selectAll.simulate('click'); //remove all selects
    container.find(ArticlePreview).forEach(preview => {
      expect(preview.prop('selected')).toBeFalsy();
    });
  });
});