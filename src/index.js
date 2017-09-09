import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Container from './components/Container';

let articles = [
  {title: 'this is a big header of the first article', link: 'https://tinybuddha.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'second article', link: 'https://www.forbes.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fblogs-images.forbes.com%2Fcelinnedacosta%2Ffiles%2F2017%2F08%2FPhoto-186.jpg'},
  {title: 'third article', link: 'http://mashable.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'fourth article', link: 'https://tinybuddha.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJfm8PFftn6WCnpj_hOefvMtn4V5cJHGUYKyyX5zgVPyhu--w'},
  {title: 'this is a big header of the first article', link: 'https://tinybuddha.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'second article', link: 'https://www.forbes.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fblogs-images.forbes.com%2Fcelinnedacosta%2Ffiles%2F2017%2F08%2FPhoto-186.jpg'},
  {title: 'third article', link: 'http://mashable.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'fourth article', link: 'https://tinybuddha.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJfm8PFftn6WCnpj_hOefvMtn4V5cJHGUYKyyX5zgVPyhu--w'},
  {title: 'this is a big header of the first article', link: 'https://tinybuddha.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'second article', link: 'https://www.forbes.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fblogs-images.forbes.com%2Fcelinnedacosta%2Ffiles%2F2017%2F08%2FPhoto-186.jpg'},
  {title: 'third article', link: 'http://mashable.com/', img: 'https://d33ypg4xwx0n86.cloudfront.net/direct?url=https%3A%2F%2Fcdn.tinybuddha.com%2Fwp-content%2Fuploads%2F2017%2F08%2FOld-man-at-the-beach.jpg'},
  {title: 'fourth article', link: 'https://tinybuddha.com/', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJfm8PFftn6WCnpj_hOefvMtn4V5cJHGUYKyyX5zgVPyhu--w'},
];

ReactDOM.render(<Container articles={articles}/>,
  document.getElementById('root'));
registerServiceWorker();
