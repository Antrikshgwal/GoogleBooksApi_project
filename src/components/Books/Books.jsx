import React from 'react';
import Card from './card';
import './Books.css';

const Books = () => {
  return (
    <div className='grid-outer'>
      <h1 style={{marginLeft:'60px' }}> Popular Books</h1>
      <div className="grid-container">
        <Card />
      </div>
    </div>
  );
};

export default Books;
