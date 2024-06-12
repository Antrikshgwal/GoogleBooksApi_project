import React, { useEffect, useState } from 'react';
import './Books.css';
import { Link,useNavigate} from 'react-router-dom';
// import MoreAbtBook from '../MoreAbtBook/MoreAbtBook'


const API_KEY = "AIzaSyCQfp-VjFklSmAT9SZ4pZBNlDDjMaAMY1w";
const BASE_URL = "https://www.googleapis.com/books/v1/volumes";
const SEARCH_TERMS = ["fiction", "science", "history", "technology", "art", "music", "biography", "fantasy", "romance", "mystery"];

const getRandomSearchTerm = () => SEARCH_TERMS[Math.floor(Math.random() * SEARCH_TERMS.length)];

const Card = () => {
  const [books, setBooks] = useState([]);
  const [currentIndices, setCurrentIndices] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        let allBooks = [];
        for (let startIndex = 0; startIndex < 100; startIndex += 40) {
          const searchTerm = getRandomSearchTerm();
          const resp = await fetch(`${BASE_URL}?q=${searchTerm}&maxResults=40&startIndex=${startIndex}&key=${API_KEY}`);
          const data = await resp.json();
          allBooks = allBooks.concat(data.items || []);
        }
        setBooks(allBooks);
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (books.length >= 8) {
      const intervalId = setInterval(() => {
        setCurrentIndices(() => {
          let newIndices = [];
          while (newIndices.length < 8) {
            const randomIndex = Math.floor(Math.random() * books.length);
            if (!newIndices.includes(randomIndex)) {
              newIndices.push(randomIndex);
            }
          }
          return newIndices;
        });
      }, 12000);

      return () => clearInterval(intervalId);
    }
  }, [books]);



 if (books.length < 6) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid-outer">
      <div className="grid-container">
        {currentIndices.map((index) => {
          const book = books[index];
          if (!book || !book.volumeInfo) {
            return <div key={index} className="grid-item card">No book information available</div>;
          }

          const { title, authors, publisher, description, imageLinks,publishedDate } = book.volumeInfo;
          const thumbnail = imageLinks?.thumbnail;
          const Id = book.id;
          

          return (
           
           <> 
           <div>
           <div key={index} className="grid-item card">
              {thumbnail && <img src={thumbnail} alt="Book cover" /> || "Cover Not Available"}
              <h2>{title  || 'Data Unavailable'}</h2>
              <h3>Author(s) : {authors?.join(', ') || 'Data Unavailable'}</h3>
              <h4>By : {publisher || 'Data Unavailable'}</h4>
              <h4>Released On : { publishedDate || 'Data Unavailable'}</h4>
              <h1>{Id}</h1>

            </div>
              <button className='bt' ><Link to={`/MoreAbtBook/${Id}`}>More About Book</Link></button>


              </div>

              
            
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
