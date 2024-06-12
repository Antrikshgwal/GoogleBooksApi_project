import React, { useState } from 'react';
import Results from './results';
import './results.css';


const Search = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        // Update local variable instead of state
        const val = e.target.value;
        setQuery(val);
    
    };

    const handleClick = (e) => {
        e.preventDefault();
        // Update state with the value of local variable
        // This ensures the state only updates when the "Find" button is clicked
        // and avoids immediate updates on input change
    };
    const styles = {
        display: query === "" ? 'none' : 'inline',
      
      };
  const searchStyle ={
    display:'inline',
    boxSizing:'border-box'

  }
    return (
        <>
        <div className="search" style={searchStyle}>
            <h1 className='searchandbrowse'>Search and Browse </h1>
           <span>
            <form action="" >
            <span> <input type="text" placeholder='Search Books/magazines' onChange={handleSearch} className='searchbar'/></span>
                {/* <button className='find' onClick={handleClick}>Find</button> */}
            </form>
            <div className="results" style={styles}>
                <h1>Top Results</h1>
                <Results query={query}  />
            </div>
            </span>

            </div>
        </>
    );
};

export default Search;
