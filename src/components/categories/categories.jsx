import React, { useState } from 'react';
import './categories.css';

const CATEGORIES = ["technology",'anime', 'Art', 'Biography', 'Business', "Children's", 'Christian', 'Classics', 'Comics',
    'Cookbooks', 'Ebooks', 'Fantasy', 'Fiction', 'Graphic Novels', 'Historical Fiction',
    'History', 'Horror', 'Memoir', 'Music', 'Mystery', 'Nonfiction', 'Poetry',
    'Psychology', 'Romance', 'Science', 'Science Fiction', 'Self Help', 'Sports',
    'Thriller', 'Travel', 'Young Adult'

];
const Categories = ({onSelectCategory}) => {


    return (
        <>
            <div className="categories">
                <h1>Read from categories </h1>

                <ul className='category-list'>
                    {CATEGORIES.map((categories) => (
                        <li key={categories}>
                            <button className='btn-grad' onClick={() => onSelectCategory(categories)}>{categories}</button>

                        </li>
                    )
                    )
                    
                    }
                </ul>
            </div>
              
        </>
    )
}
export default Categories;