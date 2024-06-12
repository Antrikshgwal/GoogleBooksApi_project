
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quotes.css'

const QuotesDisplay = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categories = ['men', 'death', 'imagination', 'inspirational', 'love', 'hope'];

  const getRandomCategory = () => {
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  };

  const fetchQuote = async () => {
    setLoading(true);
    setError(null);
    const category = getRandomCategory();
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        headers: { 'X-Api-Key': 'RMyqpmLnGZXK7fw2Wb0aXw==AKddnSmKWkK4oJS3' } // Replace with your actual API key
      });
      setQuote(response.data[0]);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component mounts

    const interval = setInterval(() => {
      fetchQuote(); // Fetch a new quote every 12 seconds
    }, 12000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
      <>
    <div className='quotes'>
      <div className="outerquote">
      <h1>Some Random Quotes</h1>
      <div className="text-overlay">
      {quote && (
        <div >

          <p>"{quote.quote}"</p>
          <p><em>- {quote.author}</em></p>
        </div>
      )}
      </div>
    </div>
    </div>
    </>

  );
};

export default QuotesDisplay;
