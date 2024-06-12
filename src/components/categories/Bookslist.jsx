import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './categories.css';
import '../search/results.css'
import { Link} from 'react-router-dom';

const BookList = ({ category }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    // Reset books and startIndex when category changes
    setBooks([]);
    setStartIndex(0);
  }, [category]);

  useEffect(() => {
    if (category) {
      const fetchBooks = async () => {
        setLoading(true);
        setError(null);
        try {
          const response = await axios.get('https://www.googleapis.com/books/v1/volumes', {
            params: {
              q: `subject:${category}`,
              startIndex: startIndex,
              maxResults: 6
            }
          });
          setBooks(prevBooks => [...prevBooks, ...(response.data.items || [])]);
        } catch (error) {
          setError(error);
        }
        setLoading(false);
      };

      fetchBooks();
    }
  }, [category, startIndex]);

  const loadMoreBooks = () => {
    setStartIndex(prevStartIndex => prevStartIndex + 10);
  };

  if (loading && startIndex === 0) return <p>Loading books...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(category);
  return (
 <div>
      <div className="categories">
     <h1>Books in {category}</h1>
        <ul>
          <div className="booklist">
        {books.map((book) => {
    const {Id} = book;
          return (  <li key={Id}>
           <div className="books">
             <img src={book.volumeInfo.imageLinks?.thumbnail} alt="" />
            <h2>{book.volumeInfo.title}</h2>
            <h3>Authors : {book.volumeInfo.authors?.join(', ')}</h3>
            <h4>Publisher :{book.volumeInfo.publisher} </h4>
            <h4> Published on : {book.volumeInfo.publishedDate}</h4>
            <h6>{book.id}</h6>
            <p> Book Description : {book.volumeInfo.description}</p>
          </div>
<button className='btn-grad'>
  <Link to={`/MoreAbtBook/${book.id}`}>More Info</Link>
  </button>
          </li>);

}
)

}
        </div>
      </ul>
      </div>
      {books.length > 0 && (
        <div className='loadmore categories' >
             <button className='loadmore' onClick={loadMoreBooks}  disabled={loading}>
          {loading ? 'Loading...' : 'Load More Books'}
        </button>
        </div>
      )}
      <h1>Some Random Quotes</h1>
    </div>
  );
  

};

export default BookList;
