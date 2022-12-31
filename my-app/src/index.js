import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const title = 'Atomic Habits';
const author = 'James Clear';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg';
const Booklist = () => {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = props => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />);
